var markdown = (function MD() {
  function MdToHtml(markdown) {
    // Replace Markdown structures with their HTML equivelents
    markdown = markdown.replace(/> (.+)/g, '<blockquote>$1</blockquote>');
    markdown = markdown.replace(/###### (.+)/g, '<h6>$1</h6>');
    markdown = markdown.replace(/##### (.+)/g, '<h5>$1</h5>');
    markdown = markdown.replace(/#### (.+)/g, '<h4>$1</h4>');
    markdown = markdown.replace(/### (.+)/g, '<h3>$1</h3>');
    markdown = markdown.replace(/## (.+)/g, '<h2>$1</h2>');
    markdown = markdown.replace(/# (.+)/g, '<h1>$1</h1>');
    markdown = markdown.replace(/- (.+)/g, '<li>$1</li>');
    markdown = markdown.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    markdown = markdown.replace(/\*(.+?)\*/g, '<em>$1</em>');
    markdown = markdown.replace(/~~(.+?)~~/g, '<del>$1</del>');
    markdown = markdown.replace(/`(.+?)`/g, '<code>$1</code>');
    markdown = markdown.replace(/``(.+?)``/g, '<code>$1</code>');
    markdown = markdown.replace(/```(.+?)```/g, '<code>$1</code>');
    markdown = markdown.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');


    return markdown;
  }
  function convert() {
    var elements = document.getElementsByTagName('md');
    for (var i = 0; i < elements.length; i++) {
      var markdown = elements[i].innerHTML;
      var html = MdToHtml(markdown);
      elements[i].innerHTML = html;
    }
  }
  return {
    convertAll: convert,
    convert: MdToHtml
  }
})();
