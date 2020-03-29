  /* ---------------------------------------------------------------------------
   * On document ready.
   * --------------------------------------------------------------------------- */

  $(document).ready(function() {
    // Fix Goldmark task lists (remove bullet points).
    $("input[type='checkbox']").parents('ul').addClass('task-list');
    $("input[type='checkbox']").addClass('checkbox');

    // Fix Mermaid.js clash with Highlight.js.
    // Refactor Mermaid code blocks as divs to prevent Highlight parsing them and enable Mermaid to parse them.
    let mermaids = [];
    [].push.apply(mermaids, document.getElementsByClassName('language-mermaid'));
    for (let i = 0; i < mermaids.length; i++) {
      $(mermaids[i]).unwrap('pre');  // Remove <pre> wrapper.
      $(mermaids[i]).replaceWith(function(){
        // Convert <code> block to <div> and add `mermaid` class so that Mermaid will parse it.
        return $("<div />").append($(this).contents()).addClass('mermaid');
      });
    }
  });
