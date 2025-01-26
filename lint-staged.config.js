module.exports = {
	"*": (stagedFiles) => [
		"npm run knip",
		`eslint ${stagedFiles.join(" ")}`,
		`biome check --no-errors-on-unmatched --files-ignore-unknown=true ${stagedFiles.join(" ")}`,
		`vitest related --run ${stagedFiles.join(" ")}`,
	],
};
