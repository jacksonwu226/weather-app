export default class UI{
  constructor(){
    this.cacheDOM();
    this.createBoilerPlate();
  }

  cacheDOM(){
    this.wrapper = document.querySelector("#wrapper");
    
  }

  createBoilerPlate(){
    this.wrapper.innerHTML = `
      <div class="header"> 
        <div class="search">
        <div class="header-logo"><img id="header-logo" src="#" alt="header logo"></div>
        <form action="#" method="post" id="search-form">
          <label for="search-content: ">Search</label>
          <input type="text" name="search-content" id="search-content">
          <input type="submit" value="Submit">
        </form>
        </div>
      </div>
      <div class='main-content'>
        <div class="current-info-grid">
          <div class="wind info-card"></div>
          <div class="
        </div>
        <div class="forecast-info> </div>
      </div>
    `
  }

  createInputForm(){

  }
}