
interface Config {
   config(app_name:string,token:string)
}

interface AddErrorObject {
      app_error: {
          title: string,
          description: string,
          log: string,
          severity: string,
          app_name: string
      }

}

class Urls {
    public production = 'https://errorhunter.herokuapp.com'
    public developing = 'http://localhost:3000';
    public host = this.production;
    public path_add_error = '/api/app_errors/';
    constructor() {
    }
}



 class ErrorHunterMain implements Config {
    private  _app_name: string;
    private  _token: string;
    private _urls: Urls
      constructor() {
          this._urls = new Urls()
      }

      private async _api_add_error(data:AddErrorObject){
          try {
              const response = await fetch(this._urls.host+this._urls.path_add_error,{
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'AuthToken': this._token
                  },
                  body: JSON.stringify(data)
              });
              return  await response.json()
          }
          catch (e) {
                 console.log(e)
          }
      }
      add_error(title:string,description:string,log:string, severity:string) {
       this._api_add_error({app_error:{title,description,log, severity,app_name: this._app_name}}).then(response =>{
              console.log(response)
       })
      }

      config(app_name:string,token:string) {
           this._app_name = app_name
           this._token = token
      }


}

const ErrorHunter = new ErrorHunterMain();

export default  ErrorHunter