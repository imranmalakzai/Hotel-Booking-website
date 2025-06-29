import { User } from "../models/user.model.js";
import { Webhook } from "svix";
import asyncHandler from "../utils/asyncHandler.js";
import { CLERK_WEBHOOK_SECRET } from "../configs/env.config.js";

const clerkWebHooks = asyncHandler(async (req, res) => {
  const webhook = new Webhook(CLERK_WEBHOOK_SECRET);

  const headers = {
    "svix-id": req.headers["svix-id"],
    "svix-timestamp": req.headers["svix-timestamp"],
    "svix-signature": req.headers["svix-signature"],
  };

  await webhook.verify(JSON.stringify(req.body), headers);
  const { data, type } = req.body;

  const userData = {
    _id: data.id,
    email: data.email_addresses[0].email_address,
    username: `${data.first_name} ${data.last_name}`,
    image: data.image_url,
  };

  switch (type) {
    case "user.created":
      await User.create(userData);
      break;
    case "user.updated":
      await User.findOneAndUpdate({ _id: data.id }, userData, { new: true });
      break;
    case "user.deleted":
      await User.findByIdAndDelete(data.id);
      break;
    default:
      break;
  }

  res.status(200).json({ message: "Webhook received" });
});

export default clerkWebHooks;
