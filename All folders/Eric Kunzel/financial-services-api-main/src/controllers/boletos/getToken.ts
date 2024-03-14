import { TokenResponse } from "@/@types";
import { env } from "@/env";
import { FastifyReply, FastifyRequest } from "fastify";
import https from "https";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

export const getToken = async (
  request: FastifyRequest<{ Params: { scope: string } }>,
  reply: FastifyReply
) => {
  const { scope } = request.params;

  const bodyRequestToken = {
    client_id: env.CLIENT_ID,
    client_secret: env.CLIENT_SECRET,
    grant_type: "client_credentials",
    scope,
  };

  const options = {
    // when using this code in production, for high throughput you should not read
    //   from the filesystem for every call, it can be quite expensive. Instead
    //   consider storing these in memory
    cert: fs.readFileSync(path.resolve(__dirname, "../../../server.crt")),
    key: fs.readFileSync(path.resolve(__dirname, "../../../server.key")),
    rejectUnauthorized: false,
  };

  const sslConfiguredAgent = new https.Agent(options);
  console.log("sslConfiguredAgent", sslConfiguredAgent);

  const requestURL = env.BANK_URL + "/oauth/v2/token";

  try {
    const responseToken = await fetch(requestURL, {
      method: "POST",
      body: JSON.stringify(bodyRequestToken),
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      agent: sslConfiguredAgent,
    });

    if (!responseToken.ok) {
      throw new Error("Erro na requisição do token.");
    }

    const responseTokenJson = await responseToken.json();

    return reply.status(200).send(responseTokenJson.access_token);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
