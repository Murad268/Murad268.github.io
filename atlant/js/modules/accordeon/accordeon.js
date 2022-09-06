const accordeon = () => {
   class Accordion {
      constructor(options = {}) {
        this.accordSelector = options.selector ? options.selector : '.accordion';
        this.accordSelectorTitle = options.selectorTitle ? options.selectorTitle : '.accordion__title';
        this.accordSelectorInner = options.selectorInner ? options.selectorInner : '.accordion__inner';
        this.classOpened = options.classOpenedName ? options.classOpenedName : 'accordion__opened';
        this.onlyOneOpened = options.onlyOneOpened ? options.onlyOneOpened : false;
        if (this.isInit()) {
          console.warn(`Accordion component with class selector "${this.accordSelector}" is already initialized`);
          return;
        }
        if (document.querySelector(this.accordSelector)) {
          document.addEventListener('click', e => this.onClick(e));
        } else {
          console.warn(`Accordion component with class selector "${this.accordSelector}" is not found`);
          return;
        }   
      }
      isInit() { 
        this.allAccord = document.querySelectorAll(this.accordSelector);
        let error = false;
        for(let i = 0; i < this.allAccord.length; i++) { 
          if (this.allAccord[i].classList.contains('initiated')) {
            error = true;
            break;
    
          } else {
            this.allAccord[i].classList.add('initiated');
          }
        }
        return error;
      }
      onClick(e) {
        if (e.target.classList.contains(this.accordSelectorTitle.split('.')[1]) || e.target.closest(this.accordSelectorTitle)) {
          this._elem = e.target.closest(this.accordSelector);
          this.content = this._elem.querySelector(this.accordSelectorInner);
          if (this.content.style.maxHeight && this.content.style.maxHeight !== '0px') {
            this.close(this._elem );
          } else {
            this.open();
          }
        }
      }
      close(elem) {
        elem.querySelector(this.accordSelectorInner).style.maxHeight = '0px';
        elem.classList.remove(this.classOpened);
      }
      open() {
        if (this.onlyOneOpened) {
    
          this.allAccord.length && this.allAccord.forEach(accor => {
            this.close(accor);
          })
        }
        this.content.style.maxHeight = this.content.scrollHeight + "px";
        this._elem.classList.add(this.classOpened);
      }
    }
    new Accordion({
      onlyOneOpened: true, // if you wont to have only one apened accordion
    });
}
accordeon()
export default accordeon