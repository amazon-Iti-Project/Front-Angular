import { Directive, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appLanguageDirection]'
})
export class LanguageDirectionDirective implements AfterViewInit ,OnChanges{
  @Input() appLanguageDirection: string='en';

  constructor(private el: ElementRef) { 
      // this.initDirection();
      // console.log("const:",this.appLanguageDirection)
      this.el.nativeElement.dir = 'rtl'
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.initDirection();
    // console.log("onchanges :",this.appLanguageDirection)
    console.log("changed")
    // this.initDirection();

  }
  ngAfterViewInit(): void {

    console.log("viewInit :",this.appLanguageDirection)
    this.el.nativeElement.onload = ()=>{
      console.log("onLoad")
    }

  }

  initDirection():void{
    let textNodes = this.el.nativeElement.querySelectorAll('span,p,a,div')
    console.log(textNodes)
    for(let node of textNodes){
      node.dir="rtl"
    }
  }
  @HostListener('load') onPageLoad() {
    console.log("loaaaaaaaaaaaaaaaaaaaaded")
    this.initDirection();
  }



}
