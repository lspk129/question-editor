export default ({ rows, cols }) => {
  const rowNumber = rows.length;
  const colNumber = cols.length;
  const imgNumber = () => {
    const rowImg = rows.filter(({ img }) => img.length > 0).length;
    const colImg = cols.filter(({ img }) => img.length > 0).length;
    return rowImg + colImg;
  };
  const longestRowLabel = Math.max(...rows.map(({ text }) => text.length), 4);
  const longestColLabel = Math.max(...cols.map(({ text }) => text.length), 4);
  return {
    rowNumber,
    colNumber,
    imgNumber: imgNumber(),
    longestRowLabel,
    longestColLabel,
  };
};
