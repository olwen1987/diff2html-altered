    var diffLines =
      diffInput.replace(/\\ No newline at end of file/g, '')
        .replace(/\r\n?/g, '\n')
        .split('\n');