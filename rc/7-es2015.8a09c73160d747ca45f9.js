(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Brth:function(n,l,t){"use strict";t.r(l);var e=t("kZht");class o{}var u=t("iwai"),a=t("C9Ky"),r=t("HFsR"),s=t("P4/0"),p=t("1VvW");class i{constructor(){}ngOnInit(){}}var c=e.pb({encapsulation:2,styles:[],data:{}});function b(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,4,"wiz-wizard",[],null,null,null,r.b,r.a)),e.qb(1,49152,null,0,s.h,[e.j,s.f,s.i,s.j],null,null),(n()(),e.rb(2,0,null,1,2,"div",[["class","wizard-main"]],null,null,null,null,null)),(n()(),e.rb(3,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.qb(4,212992,null,0,p.r,[p.b,e.M,e.j,[8,null],e.h],null,null)],(function(n,l){n(l,4,0)}),null)}function d(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"app-basic",[],null,null,null,b,c)),e.qb(1,114688,null,0,i,[],null,null)],(function(n,l){n(l,1,0)}),null)}var m=e.nb("app-basic",i,d,{},{},[]),g=t("uYEV"),h=t("i9Na"),f=t("An66");class v{constructor(){this.show=!1}ngOnInit(){}toggleSnippet(){this.show=!this.show}}var w=e.pb({encapsulation:0,styles:["div[markdown][_ngcontent-%COMP%] {\n        max-width: calc(100vw - 2.5rem);\n      }"],data:{}});function y(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Lb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.component.desc)}))}function B(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"a",[["class","btn btn-sm btn-dark"],["target","_blank"],["type","button"]],[[8,"href",4]],null,null,null,null)),(n()(),e.Lb(-1,null,["View in github"]))],null,(function(n,l){n(l,0,0,l.component.github)}))}function S(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,2,"div",[["class","overflow-auto"],["markdown",""]],null,null,null,g.b,g.a)),e.qb(1,4767744,null,0,h.b,[e.k,h.d],{data:[0,"data"]},null),e.Hb(2,2)],(function(n,l){var t=l.component,o=e.Mb(l,1,0,n(l,2,0,e.Db(l.parent,0),t.data,t.lang));n(l,1,0,o)}),null)}function C(n){return e.Nb(0,[e.Fb(0,h.a,[]),(n()(),e.rb(1,0,null,null,14,"div",[["class","mb-3"]],null,null,null,null,null)),(n()(),e.rb(2,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.rb(3,0,null,null,4,"div",[["class","col-sm"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),e.Lb(5,null,["",""])),(n()(),e.gb(16777216,null,null,1,null,y)),e.qb(7,16384,null,0,f.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(8,0,null,null,5,"div",[["class","col-sm-auto"]],null,null,null,null,null)),(n()(),e.rb(9,0,null,null,4,"div",[["aria-label","Basic example"],["class","btn-group d-flex d-sm-inline-flex"],["role","group"]],null,null,null,null,null)),(n()(),e.rb(10,0,null,null,1,"button",[["class","btn btn-sm btn-dark"],["type","button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleSnippet()&&e),e}),null,null)),(n()(),e.Lb(11,null,[" "," "])),(n()(),e.gb(16777216,null,null,1,null,B)),e.qb(13,16384,null,0,f.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,S)),e.qb(15,16384,null,0,f.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,7,0,t.desc),n(l,13,0,t.github),n(l,15,0,t.show)}),(function(n,l){var t=l.component;n(l,5,0,t.title),n(l,11,0,t.show?"Hide code":"Show code")}))}class M{constructor(){this.module="import { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\nimport { SebNgWizardModule, WizardSteps } from '@sebgroup/ng-wizard';\nimport { SharedModule } from '../shared/shared.module';\nimport { BasicRoutingModule } from './basic-routing.module';\nimport { BasicComponent } from './basic.component';\nimport { StepFinalComponent } from './components/step-final/step-final.component';\nimport { StepOneComponent } from './components/step-one/step-one.component';\nimport { StepTwoComponent } from './components/step-two/step-two.component';\n\n@NgModule({\n  declarations: [StepOneComponent, StepTwoComponent, BasicComponent, StepFinalComponent],\n  imports: [CommonModule, SharedModule, SebNgWizardModule.forRoot(), BasicRoutingModule],\n  providers: [WizardSteps]\n})\nexport class BasicModule {}",this.template='\x3c!-- add wizard component and router outlet --\x3e\n<wiz-wizard>\n  <div class="wizard-main">\n    \x3c!-- this is where your steps will be rendered --\x3e\n    <router-outlet></router-outlet>\n  </div>\n</wiz-wizard>',this.routeConfig="// setup routes and wizard steps in route module\nimport { NgModule } from '@angular/core';\nimport { RouterModule } from '@angular/router';\nimport { WizardSteps } from '@sebgroup/ng-wizard';\nimport { BasicComponent } from './basic.component';\nimport { StepOneComponent } from './components/step-one/step-one.component';\nimport { StepTwoComponent } from './components/step-two/step-two.component';\n\nconst routes: WizardSteps = [\n  {\n    path: '',\n    redirectTo: 'step-one'\n  }, {\n    path: 'step-one',\n    component: StepOneComponent,\n    data: {\n      heading: 'Step one'\n    }\n  }, {\n    path: 'step-two',\n    component: StepTwoComponent,\n    data: {\n      heading: 'Step two',\n      controls: [{\n        name: 'Step one',\n        path: 'step-one',\n        type: 'prev'\n      }, {\n        class: 'btn-outline-danger',\n        name: 'Clear events',\n        type: 'cancel'\n      }, {\n        class: 'btn-primary',\n        name: 'Save',\n        type: 'save'\n      }]\n    },\n  }, {\n    path: '**',\n    redirectTo: 'step-one',\n    pathMatch: 'full'\n  }\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(routes)],\n  exports: [RouterModule],\n})\nexport class BasicRoutingModule {}"}}var z=e.pb({encapsulation:2,styles:[],data:{}});function N(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Setup component and routes"])),(n()(),e.rb(2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" This first step is just a dumb component without any bells or whistles so the controller (ts-file) and template (html-file) for step one are basically empty. However, in order to get the wizard to work, we need to add the wizard-component, a router outlet and a router config to our app. Usually you'd add the wizard-component and router outlet to your app component but it could be to any component at any level in the router tree.\n"])),(n()(),e.rb(4,0,null,null,9,"div",[["class","card bg-light my-3 mx-n3 mx-sm-0"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,1,"h4",[["class","card-header"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Code"])),(n()(),e.rb(7,0,null,null,6,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(8,0,null,null,1,"app-code-snippet",[],null,null,null,C,w)),e.qb(9,114688,null,0,v,[],{data:[0,"data"],lang:[1,"lang"],title:[2,"title"]},null),(n()(),e.rb(10,0,null,null,1,"app-code-snippet",[],null,null,null,C,w)),e.qb(11,114688,null,0,v,[],{data:[0,"data"],lang:[1,"lang"],title:[2,"title"]},null),(n()(),e.rb(12,0,null,null,1,"app-code-snippet",[],null,null,null,C,w)),e.qb(13,114688,null,0,v,[],{data:[0,"data"],lang:[1,"lang"],title:[2,"title"]},null)],(function(n,l){var t=l.component;n(l,9,0,t.module,"typescript","basic.module.ts (app.module.ts)"),n(l,11,0,t.template,"markup","basic.component.html (app.component.html)"),n(l,13,0,t.routeConfig,"typescript","basic-routing.module.ts (app-routing.module.ts)")}),null)}function x(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"app-step-one",[],null,null,null,N,z)),e.qb(1,49152,null,0,M,[],null,null)],null,null)}var L=e.nb("app-step-one",M,x,{},{},[]),k=t("ROBh"),q=t("8j5Y"),j=t("TLy2");class E{constructor(n){this.controls=n,this.controlEvents$=this.controls.controlEvent$.pipe(Object(q.a)(n=>this.eventLog=[...this.eventLog||[],n]),Object(q.a)(n=>{"cancel"===n.type&&(this.eventLog=null)}),Object(j.a)(n=>Object(k.a)(this.eventLog))),this.component="import { Component } from '@angular/core';\nimport { of } from 'rxjs';\nimport { switchMap, tap } from 'rxjs/operators';\nimport { WizardControlEvent, WizardControlService } from '@sebgroup/ng-wizard';\n\n@Component({\n  selector: 'app-step-two',\n  templateUrl: './step-two.component.html',\n  styleUrls: ['./step-two.component.scss']\n})\nexport class StepTwoComponent {\n\n  eventLog: Array<WizardControlEvent>; // array to store events\n  controlEvents$ = this.controls.controlEvent$ // observable for events (subscribe with async pipe in template)\n    .pipe(\n      tap(event => this.eventLog = [...this.eventLog || [], event]), // add event to event log\n      tap(event => {if (event.type === 'cancel') {this.eventLog = null; }}), // clear event log on cancel event\n      switchMap(_ => of(this.eventLog)) // return event log as an observable\n    );\n\n  // add wizard control service to component\n  constructor(public controls: WizardControlService) { }\n}",this.template='<h3>Listen to control events</h3>\n<ng-container *ngIf="controlEvents$ | async as controlEvents; else noEvents">\n  <code class="d-block" *ngFor="let event of controlEvents">{{event | json}}</code>\n</ng-container>\n<ng-template #noEvents>\n  <div class="alert alert-info alert-icon">\n    <h5 class="alert-heading">Nothing has been emitted!</h5>\n    Click "Save" down in the footer to emit an event.\n  </div>\n</ng-template>'}}var I=e.pb({encapsulation:2,styles:[],data:{}});function O(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,2,"code",[["class","d-block"]],null,null,null,null,null)),(n()(),e.Lb(1,null,["",""])),e.Fb(0,f.f,[])],null,(function(n,l){n(l,1,0,e.Mb(l,1,0,e.Db(l,2).transform(l.context.$implicit)))}))}function F(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,O)),e.qb(2,278528,null,0,f.k,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.gb(0,null,null,0))],(function(n,l){n(l,2,0,l.context.ngIf)}),null)}function W(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,3,"div",[["class","alert alert-info alert-icon mx-n3 mx-sm-0"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"h5",[["class","alert-heading"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Nothing has been emitted!"])),(n()(),e.Lb(-1,null,[' Click "Save" down in the footer to emit an event. ']))],null,null)}function T(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Listen to control events"])),(n()(),e.gb(16777216,null,null,2,null,F)),e.qb(3,16384,null,0,f.l,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),e.Fb(131072,f.b,[e.h]),(n()(),e.gb(0,[["noEvents",2]],null,0,null,W)),(n()(),e.rb(6,0,null,null,7,"div",[["class","card bg-light my-3 mx-n3 mx-sm-0"]],null,null,null,null,null)),(n()(),e.rb(7,0,null,null,1,"h4",[["class","card-header"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Code"])),(n()(),e.rb(9,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(10,0,null,null,1,"app-code-snippet",[],null,null,null,C,w)),e.qb(11,114688,null,0,v,[],{data:[0,"data"],lang:[1,"lang"],title:[2,"title"]},null),(n()(),e.rb(12,0,null,null,1,"app-code-snippet",[],null,null,null,C,w)),e.qb(13,114688,null,0,v,[],{data:[0,"data"],lang:[1,"lang"],title:[2,"title"]},null)],(function(n,l){var t=l.component;n(l,3,0,e.Mb(l,3,0,e.Db(l,4).transform(t.controlEvents$)),e.Db(l,5)),n(l,11,0,t.template,"markup","step-two.component.html"),n(l,13,0,t.component,"typescript","step-two.component.ts")}),null)}function R(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"app-step-two",[],null,null,null,T,I)),e.qb(1,49152,null,0,E,[s.e],null,null)],null,null)}var J=e.nb("app-step-two",E,R,{},{},[]);class ${constructor(){}ngOnInit(){}}var D=e.pb({encapsulation:2,styles:[],data:{}});function H(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Lorem ipsum, receipt example will be added here."]))],null,null)}function U(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"app-step-final",[],null,null,null,H,D)),e.qb(1,114688,null,0,$,[],null,null)],(function(n,l){n(l,1,0)}),null)}var A=e.nb("app-step-final",$,U,{},{},[]),P=t("3kIJ"),V=t("6uGs"),Z=t("ENSU"),_=t("NxuZ"),Y=t("PCNd");const G={heading:"Step one"},K={heading:"Step two",controls:[{type:"prev"},{class:"btn-outline-danger",text:"Clear events",type:"cancel"},{class:"btn-primary",text:"Save",type:"save"},{class:"btn-primary",type:"next"}]},Q={heading:"Final step",hideNavigation:!0,controls:[{path:"step-two",type:"prev"},{class:"btn-primary",type:"close"}]};class X{}t.d(l,"BasicModuleNgFactory",(function(){return nn}));var nn=e.ob(o,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[u.b,u.a,a.a,m,L,J,A]],[3,e.j],e.v]),e.Bb(4608,f.n,f.m,[e.s,[2,f.w]]),e.Bb(4608,P.u,P.u,[]),e.Bb(4608,P.g,P.g,[]),e.Bb(4608,h.d,h.d,[e.z,[2,V.c],Z.b,h.e]),e.Bb(4608,s.e,s.e,[]),e.Bb(4608,s.j,s.j,[s.c]),e.Bb(4608,s.g,s.a,[]),e.Bb(4608,s.i,s.i,[s.g]),e.Bb(4608,s.f,s.f,[p.m,f.h]),e.Bb(1073742336,f.c,f.c,[]),e.Bb(1073742336,P.t,P.t,[]),e.Bb(1073742336,P.j,P.j,[]),e.Bb(1073742336,_.j,_.j,[]),e.Bb(1073742336,P.q,P.q,[]),e.Bb(1073742336,h.c,h.c,[]),e.Bb(1073742336,Y.a,Y.a,[_.d]),e.Bb(1073742336,p.q,p.q,[[2,p.v],[2,p.m]]),e.Bb(1073742336,s.b,s.b,[_.d]),e.Bb(1073742336,X,X,[]),e.Bb(1073742336,o,o,[]),e.Bb(256,h.e,{gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1},[]),e.Bb(1024,p.k,(function(){return[[],[{path:"",component:i,children:[{path:"",redirectTo:"step-one"},{path:"step-one",component:M,data:G},{path:"step-two",component:E,data:K},{path:"step-final",component:$,data:Q}]}]]}),[]),e.Bb(256,s.c,void 0,[])])}))}}]);