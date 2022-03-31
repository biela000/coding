const userCodeArea = CodeMirror(document.getElementById('user-code-input'), {
    lineNumbers: true,
    tabSize: 2,
    matchBrackets: true,
    mode: 'htmlmixed',
    theme: 'nord',
    lineWrapping: true,
    autoCloseTags: true,
    autoCloseBrackets: true
});
const exerciseIframe = document.querySelector('iframe.iframe-exercise');
const resizer = document.querySelector('.resizer');
const topDiv = resizer.previousElementSibling;
const bottomDiv = resizer.nextElementSibling;
const defaultCode = `<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
}
.body-container {
  display: flex;
  flex-direction: column;
}
header {
  background-color: #2E3440;
  color: #D8DEE9;
  text-align: center;
}
header h1 {
  font-size: 4em;
}
.main-container {
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: auto;
  margin-top: 80px;
  padding-bottom: 80px;
}
article {
  width: 800px;
  height: 400px;
  background-color: #2E3440;
  margin: auto;
  color: #D8DEE9;
}
.main-article-container {
  padding: 10px;
}
.main-article-content-container {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
article p {
  display: inline-block;
  width: 50%;
}
article img {
  display: inline-block;
  width: 45%;
}
#kapibara2 {
  background-color: #BF616A;
}
#kapibara3 {
  background-color: #D08770;
}
#kapibara4 {
  background-color: #A3BE8C;
}
#kapibara5 {
  background-color: #B48EAD;
}
</style>
<div class="container body-container">
  <header>
    <div class="container header-container">
      <h1>&lt;KAPIBARY&gt;</h1>
    </div>
  </header>
  <main>
    <div class="container main-container">
      <article class="main-article" id="kapibara1">
        <div class="container main-article-container">
          <h2>&lt;KAPIBARY&gt;</h2>
          <div class="main-article-content-container">
            <p>Once in a lifetime you'll come across a film that truly captures the history and cultural distinctions of the modern world the way a person can subjectively perceive it through our guided field of perspective. I have to admit, I had my doubts when I first learned of the movie. After all, Capybara ok I pull up hop out at the after party? Will this movie even be good? How ignorant was I to even have these thoughts. Little did I know I was about to indulge in what may have been the best 10 seconds of my life.</p>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fboingboing.net%2Fwp-content%2Fuploads%2F2019%2F04%2Fcapy.jpg%3Ffit%3D641%252C337%26ssl%3D1&f=1&nofb=1">
          </div>
        </div>
      </article>
      <article class="main-article" id="kapibara2">
      <div class="container main-article-container">
          <h2>&lt;KAPIBARY&gt;</h2>
          <div class="main-article-content-container">
            <p>Once in a lifetime you'll come across a film that truly captures the history and cultural distinctions of the modern world the way a person can subjectively perceive it through our guided field of perspective. I have to admit, I had my doubts when I first learned of the movie. After all, Capybara ok I pull up hop out at the after party? Will this movie even be good? How ignorant was I to even have these thoughts. Little did I know I was about to indulge in what may have been the best 10 seconds of my life.</p>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fboingboing.net%2Fwp-content%2Fuploads%2F2019%2F04%2Fcapy.jpg%3Ffit%3D641%252C337%26ssl%3D1&f=1&nofb=1">
          </div>
        </div>
      </article>
      <article class="main-article" id="kapibara3">
        <div class="container main-article-container">
          <h2>&lt;KAPIBARY&gt;</h2>
          <div class="main-article-content-container">
            <p>Once in a lifetime you'll come across a film that truly captures the history and cultural distinctions of the modern world the way a person can subjectively perceive it through our guided field of perspective. I have to admit, I had my doubts when I first learned of the movie. After all, Capybara ok I pull up hop out at the after party? Will this movie even be good? How ignorant was I to even have these thoughts. Little did I know I was about to indulge in what may have been the best 10 seconds of my life.</p>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fboingboing.net%2Fwp-content%2Fuploads%2F2019%2F04%2Fcapy.jpg%3Ffit%3D641%252C337%26ssl%3D1&f=1&nofb=1">
          </div>
        </div>
      </article>
      <article class="main-article" id="kapibara4">
        <div class="container main-article-container">
          <h2>&lt;KAPIBARY&gt;</h2>
          <div class="main-article-content-container">
            <p>Once in a lifetime you'll come across a film that truly captures the history and cultural distinctions of the modern world the way a person can subjectively perceive it through our guided field of perspective. I have to admit, I had my doubts when I first learned of the movie. After all, Capybara ok I pull up hop out at the after party? Will this movie even be good? How ignorant was I to even have these thoughts. Little did I know I was about to indulge in what may have been the best 10 seconds of my life.</p>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fboingboing.net%2Fwp-content%2Fuploads%2F2019%2F04%2Fcapy.jpg%3Ffit%3D641%252C337%26ssl%3D1&f=1&nofb=1">
          </div>
        </div>
      </article>
      <article class="main-article" id="kapibara5">
        <div class="container main-article-container">
          <h2>&lt;KAPIBARY&gt;</h2>
          <div class="main-article-content-container">
            <p>Once in a lifetime you'll come across a film that truly captures the history and cultural distinctions of the modern world the way a person can subjectively perceive it through our guided field of perspective. I have to admit, I had my doubts when I first learned of the movie. After all, Capybara ok I pull up hop out at the after party? Will this movie even be good? How ignorant was I to even have these thoughts. Little did I know I was about to indulge in what may have been the best 10 seconds of my life.</p>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fboingboing.net%2Fwp-content%2Fuploads%2F2019%2F04%2Fcapy.jpg%3Ffit%3D641%252C337%26ssl%3D1&f=1&nofb=1">
          </div>
        </div>
      </article>
    </div>
  </main>
</div>
<script>
  {
    
  }
</script>`;

if (codeWritten = localStorage.getItem('gradedCode')) {
    userCodeArea.setValue(codeWritten);
    exerciseIframe.contentWindow.document.open();
    exerciseIframe.contentWindow.document.write(userCodeArea.getValue());
    exerciseIframe.contentWindow.document.close();
}

else {
    userCodeArea.setValue(defaultCode);
    exerciseIframe.contentWindow.document.open();
    exerciseIframe.contentWindow.document.write(userCodeArea.getValue());
    exerciseIframe.contentWindow.document.close();
}

let mouseX = 0;
let mouseY = 0;

let topHeight = 0;

const mouseDownHandler = function (b) {
    mouseX = b.clientX;
    mouseY = b.clientY;
    topHeight = topDiv.getBoundingClientRect().height;

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
};

resizer.addEventListener('mousedown', mouseDownHandler);

const mouseMoveHandler = function (b) {
    const deltaX = b.clientX - mouseX;
    const deltaY = b.clientY - mouseY;
    const newTopHeight = ((topHeight + deltaY) * 100) / resizer.parentNode.getBoundingClientRect().height;
    topDiv.style.height = `${newTopHeight}%`;

    resizer.style.cursor = 'row-resize';
    document.body.style.cursor = 'row-resize';
    topDiv.style.userSelect = 'none';
    topDiv.style.pointerEvents = 'none';
    bottomDiv.style.userSelect = 'none';
    bottomDiv.style.pointerEvents = 'none';
    //console.log(document.body.getBoundingClientRect().height -  topDiv.getBoundingClientRect().height);
    // console.log(document.activeElement.style.getPropertyValue('--code-area-height'));
    document.documentElement.style.setProperty('--code-area-height', `${bottomDiv.getBoundingClientRect().height}px`);
};

const mouseUpHandler = function () {
    resizer.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');
    topDiv.style.removeProperty('user-select');
    topDiv.style.removeProperty('pointer-events');
    bottomDiv.style.removeProperty('user-select');
    bottomDiv.style.removeProperty('pointer-events');
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    // document.querySelector('div.cm-s-nord').style.height = `${Math.floor(bottomDiv.getBoundingClientRect().height)}px !important`;
};

userCodeArea.on('change', () => {
    exerciseIframe.contentWindow.document.open();
    exerciseIframe.contentWindow.document.write(userCodeArea.getValue());
    exerciseIframe.contentWindow.document.close();
    localStorage.setItem('gradedCode', userCodeArea.getValue());
});