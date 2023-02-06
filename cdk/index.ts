import * as pulumi from "@pulumi/pulumi";
import * as cloudflare from "@pulumi/cloudflare";

const project = new cloudflare.PagesProject("buildConfig", {
    accountId: "e0d74c227439ece29e62209d109ae43e",
    buildConfig: {
        buildCommand: "npm run build",
        destinationDir: "dist",
        rootDir: "/client",
    },
    name: "testingProject",
    productionBranch: "main",
});
