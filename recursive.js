function recursive(index) {
  while (index > 0) {
    console.log(index);
    index = index - 1;
    recursive(index);
    break;
  }
}
recursive(40)