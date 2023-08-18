import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'cc68d5e374c84143a98de36737b9825c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
