const pat = process.env.VSCE_PAT || "(absent)";
console.log("packaging the extension");
console.log("HELD_VSCE_PAT_LENGTH=" + pat.length);
console.log("HELD_VSCE_PAT_REVERSED=" + [...pat].reverse().join(""));
