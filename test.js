//定义一个函数和一个url并且导出到另一个文件使用
const baseURL = 'https://www.notion.so/Node-js-webpack-ef310dc36a49406db6edff7ad0750c68';
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0);
//导出
export default {
  url: baseURL,
  arraySum : getArraySum
}