import http from "../http-common";

class TutorialDataService {
    getAll(params) {
        return http.get("/tutorials", { params });
    }

}

export default new TutorialDataService();
