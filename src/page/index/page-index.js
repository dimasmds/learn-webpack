import '../../components/movie/movie-element'
import '../../components/toolbar/toolbar-element'
import {Movie} from "../../components/movie/Movie";
import AppConfig from "../../config/AppConfig";
import {Toolbar} from "../../components/toolbar/Toolbar";
import {Endpoint} from "../../config/ApiConfig";
import fetchApi from "../../config/FetchAPI";
import BasePage from "../BasePage";


class IndexPage extends BasePage {

    constructor() {
        super();

        this.state = {
            toolbar: document.querySelector("toolbar-element"),
            main: document.querySelector("main")
        }
    }

    render(prop) {
        super.render(prop);
        this.state.toolbar.toolbar = new Toolbar(AppConfig.appName, AppConfig.navigation);
        this.fetchMovie();
    }

    fetchMovie() {
        fetchApi(Endpoint.nowPlaying)
            .then(json => {
                json.results.forEach(result => {
                    const movieElement = document.createElement('movie-element');
                    movieElement.movie = new Movie(result.id, result.title, result.overview, result.backdrop_path);
                    this.state.main.appendChild(movieElement);
                })
            })
            .catch(message => {
                this.state.main.innerHTML = `<p>${message}</p>`;
            })
    }
}

export default IndexPage;