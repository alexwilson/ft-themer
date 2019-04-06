const render = colors => Object.entries(colors).map(
    ([theme, colorSet]) => Promise.resolve({
      name: `themer-slack-${theme}.txt`,
      contents: Buffer.from([
        colorSet.shade0, // Column BG
        colorSet.shade1, // Menu BG Hover
        colorSet.accent6, // Active Item
        colorSet.shade5, // Active Item Text
        colorSet.accent6, // Hover Item
        colorSet.shade7, // Text Color
        colorSet.accent6, // Active Presence
        colorSet.accent6, // Mention Badge
      ].join(',')),
    })
  );
  
  module.exports = {
    render,
  };
  