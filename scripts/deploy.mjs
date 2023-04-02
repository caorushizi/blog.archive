#!/usr/bin/env zx

import "zx/globals";

const localDir = "public/";
const ossBucket = "oss://zy-blog-v2";

const deployFalgs = ["-r", "-f", localDir, ossBucket];

try {
  await $`ossutil64 cp ${deployFalgs}`;
} catch (p) {
  console.log(chalk.red("执行失败，错误码是：", p.exitCode));
}
