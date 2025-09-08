import fs from "fs";
import app from "../app.json" with { type: "json" };

function build() {
  let appVersion = app.expo.version;
  const [major, minor, patch] = appVersion.split(".").map(Number);
  appVersion = [major, minor, patch + 1].join(".");
  app.expo.version = appVersion;

  app.expo.android.versionCode++;

  console.log(`Build alterada:\n\t- Version: ${app.expo.version}\n\t- VersionCode: ${app.expo.android.versionCode}`)

  const data = JSON.stringify(app, null, 2)
  fs.writeFileSync("./app.json", data);
}

build();
