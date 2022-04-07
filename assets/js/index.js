document.onreadystatechange = function() {
            if (document.readyState !== "complete") {
                document.querySelector(
                  "body").style.visibility = "hidden";
                document.querySelector(
                  "#container").style.visibility = "visible";
            } else {
                document.querySelector(
                  "#container").style.display = "none";
                document.querySelector(
                  "body").style.visibility = "visible";
            }
};


// projects  
const projects = [
  {
    nr: '01',
    name: 'Disequilibrium Room',
    link: 'https://www.youtube.com/watch?v=XU1Cvdl-Rgw',
    imgURL = 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='
  },
  {
    nr: '02',
    name: 'AM, PM'
    link: 'https://itp.nyu.edu/shows/winter2020/am-pm/',
    imgURL = 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='

  },
  {
    nr: '03',
    name: 'placehoder-01',
    link: 'https://estherzhang.com/',
    imgURL = 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='
  },
  {
    nr: '04',
    name: 'placehoder-02',
    link: 'https://estherzhang.com/',
    imgURL = 'https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY='
    
  },
  {

const app = document.getElementById('app');
const imgBaseURL = 'https://www.florin-pop.com/images/100Days100PRojects/Day ';

projects.forEach(project => {
  // const title = `${project.name} - #${project.nr}`;
  const title = `${project.name}`;

  // const imgURL = imgBaseURL + project.nr + '.jpg';
  
  const projectEl = document.createElement('a');
  projectEl.classList.add('project');
  projectEl.href = project.link;
  projectEl.target = '_blank';

  projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
    <p>
      ${title}
    </p>
    `;

  app.appendChild(projectEl);
});
