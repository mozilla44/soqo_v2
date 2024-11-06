import mailchimp from "@mailchimp/mailchimp_marketing"
import md5 from "md5"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: "us17",
    })

    const { email } = JSON.parse(req.body)

    await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_LIST_ID!,
      md5(email),
      {
        email_address: email,
        status_if_new: "subscribed",
      }
    )

    return res.status(200).json({ succes: true })
  }

  res.status(400).json({ succes: false })
}
