

export class listServis {

    Servis = ["Nanda", "Ikhwanul", "Nadlirin"];

    getTodoServis(){
        return JSON.stringify({
            code: 911,
            status: "Bisa dicoba",
            info: this.Servis.map((value, index) => {
                return {
                    id: index,
                    name: value
                }
            })
        });
    }

    getServis(req, res){
        res.write(this.getTodoServis());
        res.end();
    }

    createServis(req, res){
        req.addListener("data", (data) => {
            const badan = JSON.parse(data.toString());
            this.Servis.push(badan.name);

            res.write(this.getTodoServis());
            res.end();
        });
    }
    
    updateServis(req, res){
        req.addListener("data", (data) => {
            const badan = JSON.parse(data.toString());
            if (this.Servis[badan.id]) {
                this.Servis[badan.id] = badan.name;
            }

            res.write(this.getTodoServis());
            res.end();
            
        });
    }

    deleteServis(req, res) {
        req.addListener("data", (data) => {
            
            const badan = JSON.parse(data.toString());
            if (this.Servis[badan.id]) {
                this.Servis.splice(badan.id, 1);
            }

            res.write(this.getTodoServis());
            res.end();
            
        });
    }
}