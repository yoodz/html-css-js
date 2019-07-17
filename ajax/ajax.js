let ajax = new XMLHttpRequest()
ajax.onreadystatechange = () => {
  if (ajax.readyState === 4) { // 成功完成
    // 判断响应结果:
    if (ajax.status === 200) {
        // 成功，通过responseText拿到响应的文本:
        console.log(ajax.responseText);
        // document.getElementById('content').innerHTML = ajax.responseText
    } else {
        // 失败，根据响应码判断失败原因:
        console.log(ajax.status);
    }
  }
}
ajax.open('GET', 'https://cnodejs.org/api/v1/topics');
ajax.send();