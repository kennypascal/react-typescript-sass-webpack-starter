import markDownHTML from './mark-down-html';

const HTML_STRING = '<p>Test</p>';
const TEST_OBJ = {
  dangerouslySetInnerHTML: {
    __html: HTML_STRING
  }
};

it('Returns a boolean if a number is even or odd', () => {
  expect(markDownHTML(HTML_STRING)).toMatchObject(TEST_OBJ);
});
