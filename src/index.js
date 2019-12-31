import './styles/style.css';
import DetailPage from "./page/detail/page-detail";
import IndexPage from "./page/index/page-index";

document.addEventListener('DOMContentLoaded', () => {
   const endpoint = location.href.substring(window.location.href.lastIndexOf('/') + 1);

   if(endpoint.startsWith("index") || endpoint === "") {
       const indexPage = new IndexPage();
       indexPage.render({});
   } else if(endpoint.startsWith("detail")) {
       const detailPage = new DetailPage();

       const url = new URL(location.href);
       const idMovie = url.searchParams.get("id");

       detailPage.render({idMovie: idMovie})
   }
});