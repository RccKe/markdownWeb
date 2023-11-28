import { useEffect, useState } from "react";
import * as marked from "marked";
import "./App.scss";

const App = () => {
  const [newTxt, setNewTxt] = useState("");
  const [html, setHtml] = useState("");

  useEffect(() => {
    // Fetch the content of the Markdown document (document.md)
    fetch('/path/to/document.md')
      .then(response => response.text())
      .then(data => {
        setNewTxt(data);
        setHtml(marked.marked(data));
      })
      .catch(error => console.error('Error fetching Markdown document:', error));
  }, []);

  return (
    <div id="all_box">
      <div className="all_box_top">
        {/* Display Markdown content in the textarea */}
        <textarea
          id="editor"
          cols="30"
          rows="10"
          onChange={(e) => {
            const value = e.target.value;
            setNewTxt(value);
            setHtml(marked.marked(value));
          }}
          value={newTxt}
        />
      </div>
      <div id="preview">
        {/* Display combined original Markdown content and HTML conversion */}
        <div>
          <h2>Markdown and HTML Combined:</h2>
          <p>{newTxt}</p>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
      </div>
    </div>
  );
};

export default App;






// 这个项目的目标是构建一个功能与https://markdown-previewer.freecodecamp.rocks/
// 相似的应用程序。满足以下用户故事并确保所有测试通过。你可以使用HTML、JavaScript、CSS、Bootstrap、SASS、React、Redux和jQuery的任意组合。你应该使用一个前端框架（比如React），因为这一部分是关于学习前端框架的。不推荐使用上面未列出的其他技术，使用它们将自担风险。我们正在考虑支持其他前端框架，如Angular和Vue，但它们目前不受支持。我们将接受并尽量修复所有使用此项目建议的技术堆栈的问题报告。祝你编码愉快！

// 用户故事＃1：我可以看到一个带有相应id="editor"的textarea元素。

// 用户故事＃2：我可以看到一个带有相应id="preview"的元素。

// 用户故事＃3：当我在#editor元素中输入文本时，#preview元素会随着我输入而更新，以显示textarea的内容。

// 用户故事＃4：当我在#editor元素中输入GitHub风格的Markdown时，文本将作为HTML呈现在#preview元素中，我输入时会实时更新（提示：你不需要自己解析Markdown - 你可以导入Marked库来实现：https://cdnjs.com/libraries/marked）。

// 用户故事＃5：当我的Markdown预览器首次加载时，#editor字段中的默认文本应包含至少包含以下各个元素的有效Markdown：标题元素（H1大小），子标题元素（H2大小），链接，内联代码，代码块，列表项，引用块，图像和粗体文本。

// 用户故事＃6：当我的Markdown预览器首次加载时，#editor字段中的默认Markdown应呈现为#preview元素中的HTML。

// 可选奖励（不需要使此测试通过）：我的Markdown预览器解释回车并将其呈现为br（换行）元素。

// 你可以使用这个CodePen模板来构建你的项目，点击“保存”以创建你自己的pen。或者你可以使用这个CDN链接在任何你喜欢的环境中运行测试：https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

// 完成后，请提交你的工作项目的URL，确保所有测试都通过。