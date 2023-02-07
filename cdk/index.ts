import * as cloudflare from "@pulumi/cloudflare";
import { local } from "@pulumi/command";

const project = new cloudflare.PagesProject("project", {
    name: "testing-project",
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    productionBranch: "main"
});


