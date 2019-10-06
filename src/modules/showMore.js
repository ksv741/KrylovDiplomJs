const showMore = () => {
  const moreBtn = document.querySelector('.add-sentence-btn');
  const wrap = document.querySelector('.sentence .row').children;
  const blocks = [...wrap].filter((el) => el.tagName.toLowerCase() == 'div');

  moreBtn.addEventListener('click', () => {
    blocks.forEach((element) => {
      if(element.classList.contains('hidden') || element.classList.contains('visible-sm-block')){
      element.classList = ['col-xs-12 col-sm-6 col-md-4']
      }
    });
    moreBtn.style.display = 'none';
  });
};
export default showMore;