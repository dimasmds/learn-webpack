import fetchApi from "../../config/FetchAPI";
import {Endpoint} from "../../config/ApiConfig";
import {Toolbar} from "../../components/toolbar/Toolbar";
import AppConfig from "../../config/AppConfig";
import BasePage from "../BasePage";

class DetailPage extends BasePage {

    constructor() {
        super();
        this.state = {
            toolbar: document.querySelector("toolbar-element")
        }
    }

    getMovieDetail(idMovie) {
        fetchApi(Endpoint.detailMovie(idMovie))
            .then(movie => {
                console.log(movie);
            })
    };

    render(prop) {
        super.render(prop);
        this.state.toolbar.toolbar = new Toolbar(AppConfig.appName);
        this.getMovieDetail(prop.idMovie);
    }
}

export default DetailPage;