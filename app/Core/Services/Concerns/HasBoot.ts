const HasBoot: BootableService = {

    boot() {
        this.app.listen(this.port);
    }

};