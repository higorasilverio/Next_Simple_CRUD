import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({ status: 200, message: "API up and working just fine!" });
};

export default handler;
