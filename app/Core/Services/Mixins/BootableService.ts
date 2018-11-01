class BootableService {
    
    boot = () => {
        this.app.listen(this.port);
    }

}