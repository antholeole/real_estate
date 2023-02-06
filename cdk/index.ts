import * as pulumi from "@pulumi/pulumi";
import * as cloudflare from "@pulumi/cloudflare";

const project = new cloudflare.PagesProject("buildConfig", {
    accountId: "e0d74c227439ece29e62209d109ae43e",
    buildConfig: {
        buildCommand: "npm run build",
        destinationDir: "dist",
        rootDir: "/client",
    },
    source: {
        type: "github",
        config: {
            deploymentsEnabled: true,
            owner: "antholeole",
            repoName: "real_estate", //TODO: get this from GH actions
            prCommentsEnabled: true,
            previewBranchExcludes: [
                "main",
            ],
            previewBranchIncludes: [
                "dev",
            ],
            previewDeploymentSetting: "custom",
            productionBranch: "main",
            productionDeploymentEnabled: true,
        }
    },
    name: "testing-project",
    productionBranch: "main",
});
