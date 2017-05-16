import React, { Component } from 'react';
import {SparkScroll, SparkProxy } from '/imports/lib/spark.js';
require('velocity-animate');
require('velocity-animate/velocity.ui');
import VelocityTransitionGroup from 'velocity-react/velocity-transition-group';
import VelocityComponent from 'velocity-react/velocity-component';

import { Hinder } from '../Components/Hinder.jsx';

let styles = {
  container: {
    backgroundColor: '#212526',
  },
  map: {
    position: 'fixed',
    top: 0,
  },
  img: {
    position: 'fixed',
    top: 0,
    zIndex: -1,
  },
  hinder: {

  },
  hinderIcon: {
    height: 96,
    top: 627,
    left: 1103,
    position: 'fixed',
    zIndex: 3
  }
}

const hinders = [
  [5123, 5070, false],
  [5075, 5025, {
    "imgPath": "images/hinderPics/Hay-Bale-Jump-JG_150606_Toughest_Aalborg_0137-413x620.jpg",
    "name": "Hay Bale Jump",
    "text": "Höbalar, ca 1,2m höga som står med olika mellanrum. Hoppa mellan dem, eller gå ner mellan varje. Du ska över samtliga balar.",
    "rate": 94
  }],
  [5025, 4790, false],
  [4790, 4755, {
    "imgPath": "/images/hinderPics/Sandbags-Jacques-Holst-sjakholst@gmail.com-Photo-by-Jacques-Holst-bit.ly-jholstpics-CC-by-nc-sa-20150606-12-29-21-620x413.jpg",
    "name": "Sandbags",
    "text": "En säck vars vikt varierar mellan 15-25kg. Bär den från punkt A till punkt B.",
    "rate": null
  }],
  [4755, 4640, false],
  [4640, 4585, {
    "imgPath": "/images/hinderPics/Incline-Wall-TOUGHEST_24H_28-29.06.2015-143-413x620.jpg",
    "name": "Incline Wall",
    "text": "En lätt lutande vägg du ska ta dig över. Höjden är ca 2m och lutar ca 45grader.",
    "rate": 89
  }],
  [4585, 4440, false],
  [4440, 4400, {
    "imgPath": "/images/hinderPics/TOUGHEST_24H_28-29.06.2015-5.jpg",
    "name": "1K Run",
    "text": "Löb 1 kilometer."
  }],
  [4400, 4316, false],
  [4316, 4256, {
    "imgPath": "/images/hinderPics/Toughest-07140-1-620x413.jpg",
    "name": "Ring Slide",
    "text": "Få ett bra grepp om ringarna och börjar sedan genom att glida så långt som möjligt på rören. Använd sedan din överkroppsstyrka  till att flytta ringarna framåt en och en.",
    "rate": 92
  }],
  [4256, 4221, false],
  [4221, 4186, {
    "imgPath": "/images/hinderPics/Big-Wall-JG_20140927_Toughest_Cph_0162-copy-413x620.jpg",
    "name": "Big Wall",
    "text": "En 2m hög vägg du ska ta dig över. Givetvis får du inte använda ställningen till hjälp.",
    "rate": 78
  }],
  [4186, 4156, false],
  [4156, 4082, {
    "imgPath": "/images/hinderPics/Hay-Pyramid-Jacques-Holst-sjakholst@gmail.com-Photo-by-Jacques-Holst-bit.ly-jholstpics-CC-by-nc-sa-20150502-13-06-49-620x413.jpg",
    "name": "Hay Bale Pyramid",
    "text": "Storleken på höbalarna varierar, men är ofta ca 1,2m höga. De är staplade som en pyramid en totalhöjd på 2-3 balar.",
    "rate": 93
  }],
  [4082, 4060, false],
  [4060, 4000, {
    "imgPath": "/images/hinderPics/umea-143-620x349.jpg",
    "name": "Balance",
    "text": "Det klassiska balans hindret. Gå upp och ner stången och stampa på den vita markeringen på den andra sidan för att fortsätta.",
    "rate": 90
  }],
  [4000, 3925, false],
  [3925, 3885, {
    "imgPath": "/images/hinderPics/Traverse-Walls-JG_150606_Toughest_Aalborg_0937-620x413.jpg",
    "name": "Traverse Walls",
    "text": "Klättra längs sidan av väggarna genom att använda de olika greppen.",
    "rate": 54
  }],
  [3885, 3866, false],
  [3866, 3826, {
    "imgPath": "/images/hinderPics/TOUGHEST_24H_28-29.06.2015-5.jpg",
    "name": "2K Run",
    "text": "Löb 2 kilometer."
  }],
  [3826, 3781, false],
  [3781, 3741, {
    "imgPath": "/images/hinderPics/PullAStone.jpg",
    "name": "Pull A Stone",
    "text": "Dra tyngden hela vägen upp till markeringen. Ställningar får användas som stöd för dina ben.",
  }],
  [3741, 3621, false],
  [3621, 3566, {
    "imgPath": "/images/hinderPics/Step-Up-JG_150516_Toughest_Ume--_0868-413x620.jpg",
    "name": "Step Up",
    "text": "Se det som en trappa med höga steg.",
    "rate": 95
  }],
  [3566, 3482, false],
  [3482, 3442, {
    "imgPath": "/images/hinderPics/TOUGHEST_24H_28-29.06.2015-5.jpg",
    "name": "3K Run",
    "text": "Löb 3 kilometer."
  }],
  [3442, 3431, false],
  [3431, 3346, {
    "imgPath": "/images/hinderPics/Swing-Walk-TOUGHEST_STKHLM_24052015-59-620x413.jpg",
    "name": "Swing Walk",
    "text": "Ta dig framåt med hjälp av de olika greppen som hänger ned. Hindret är ca 5m långt och kräver teknik och överkroppsstyrka.",
    "rate": 41
  }],
  [3346, 3316, false],
  [3316, 3296, {
    "imgPath": "/images/hinderPics/Jeep-Dunks-TOUGHEST_24H_28-29.06.2015-123-403x620.jpg",
    "name": "Jeep Dunks",
    "text": "Bär dunkarna från punkt A till punkt B. En dunk väger 20kg. Emellanåt vill vi att du ska bära 2 dunkar samtidigt.",
    "rate": 99
  }],
  [3296, 3271, false],
  [3271, 3201, {
    "imgPath": "/images/hinderPics/ig-zabakii-Photo-by-Jacques-Holst-jacquesholst.com-CC-by-nc-sa-20160903-12-03-47-620x413.jpg",
    "name": "Traverse Rings",
    "text": "Flytta ringarna en och en i en lugn och kontrollerad rörelse från pinne till pinne tills du har kommit över hela röret. Se till att ha bra grepp då du kommer hänga med hela kroppsvikten på en arm när du flyttar ringarna.",
    "rate": 72
  }],
  [3201, 3131, {
    "imgPath": "/images/hinderPics/Hay-Bale-Jump-JG_150606_Toughest_Aalborg_0137-413x620.jpg",
    "name": "Hay Bale Jump",
    "text": "Höbalar, ca 1,2m höga som står med olika mellanrum. Hoppa mellan dem, eller gå ner mellan varje. Du ska över samtliga balar.",
    "rate": 94
  }],
  [3131, 3106, false],
  [3106, 3076, {
    "imgPath": "/images/hinderPics/Mudland-Toughest_GBG_MikaelStiller_20141018-160-620x414.jpg",
    "name": "Mudland XL",
    "text": "Antingen hoppar du mellan groparna eller går du ner i groparna och över till nästa. Groparna är ca 1m djupa och högarna i mellan är ca 1m höga."
  }],
  [3076, 3046, false],
  [3046, 3001, {
    "imgPath": "/images/hinderPics/Bulgarian-Bag-TOUGHEST_UMEA_160515-68-620x349.jpg",
    "name": "Bulgarian Bags",
    "text": "Bär bagen från punkt A till punkt B. Bagen väger ca 20kg.",
    "rate": 96
  }],
  [3001, 2926, {
    "imgPath": "/images/hinderPics/Sternum-Checker-JG_150516_Toughest_Ume-_0872-620x620.jpg",
    "name": "Sternum Checker",
    "text": "Det är 2 stockar du ska över. Den ena sätter du foten på, den andra ska du över.",
    "rate": 63
  }],
  [2926, 2862, false],
  [2862, 2826, {
    "imgPath": "/images/hinderPics/TOUGHEST_24H_28-29.06.2015-5.jpg",
    "name": "4K Run",
    "text": "Löb 4 kilometer."
  }],
  [2826, 2796, false],
  [2796, 2721, {
    "imgPath": "/images/hinderPics/Dips-Walk-TOUGHEST_24H_28-29.06.2015-62-620x349.jpg",
    "name": "Dips Walk",
    "text": "Du ska gå från ena sidan till andra genom att använda överkroppen. Du går med händerna på stängerna. Längden är ca 5m.",
    "rate": 64
  }],
  [2721, 2631, false],
  [2631, 2581, {
    "imgPath": "/images/hinderPics/Irish-Table-_MG_0213-620x415.jpg",
    "name": "Irish Table",
    "text": "Ett klassiskt hinder där du ska ta dig över plankan. Plankans höjd varierar, men är ofta runt 1,6-1,7m högt. Du får givetvis inte använda ställningen till hjälp.",
    "rate": 63
  }],
  [2581, 2496, false],
  [2496, 2476, {
    "imgPath": "/images/hinderPics/Carry-a-log-TOUGHEST_24H_28-29.06.2015-78-620x413.jpg",
    "name": "Carry A Log",
    "text": "Bär stocken från punkt A till punkt B. Stocken väger ca 25kg.",
    "rate": 95
  }],
  [2476, 2436, false],
  [2436, 2396, {
    "imgPath": "/images/hinderPics/TOUGHEST_24H_28-29.06.2015-5.jpg",
    "name": "5K Run",
    "text": "Löb 5 kilometer."
  }],
  [2396, 2336, false],
  [2336, 2276, {
    "imgPath": "/images/hinderPics/Incline-Wall-TOUGHEST_24H_28-29.06.2015-143-413x620.jpg",
    "name": "Incline Wall",
    "text": "En lätt lutande vägg du ska ta dig över. Höjden är ca 2m och lutar ca 45grader.",
    "rate": 89
  }],
  [2276, 2201, false],
  [2201, 2116, {
    "imgPath": "/images/hinderPics/Rings-Jacques-Holst-sjakholst@gmail.com-Photo-by-Jacques-Holst-bit.ly-jholstpics-cc-by-nc-sa-20140927-11-47-19-459x620.jpg",
    "name": "Rings",
    "text": "Svinga dig i ringarna för att ta dig över. Hindret varierar i total längd, men ringarna hänger alltid med 80cm mellanrum och hänger ner ca 80 cm från ställningen. Höjden över marken varierar.",
    "rate": 80
  }],
  [2116, 2081, false],
  [2081, 2061, {
    "imgPath": "/images/hinderPics/Mudland-Toughest_GBG_MikaelStiller_20141018-160-620x414.jpg",
    "name": "Mudland",
    "text": "Antingen hoppar du mellan groparna eller går du ner i groparna och över till nästa. Groparna är ca 1m djupa och högarna i mellan är ca 1m höga.",
    "rate": 91
  }],
  [2061, 2012, false],
  [2012, 1941, {
    "imgPath": "/images/hinderPics/Monkey-Bar-ToughestMalmo2014-VincentCruz-26-620x413.jpg",
    "name": "Monkey Bar",
    "text": "Ett klassiskt hinder som kräver överkroppsstyrka och teknik. Ta dig från ena sidan till andra utan att nudda marken. Hindret är ca 8m långt. Ibland är 4m uppför och 4m nedför.",
    "rate": 77
  }],
  [1941, 1936, false],
  [1936, 1893, {
    "imgPath": "/images/hinderPics/TOUGHEST_24H_28-29.06.2015-5.jpg",
    "name": "6K Run",
    "text": "Löb 6 kilometer."
  }],
  [1893, 1806, {
    "imgPath": "/images/hinderPics/Dragons-Back-JG_20140927_Toughest_Cph_0180-copy-620x413.jpg",
    "name": "Dragon’s Back",
    "text": "5 platåer ca 2,5m höga. Du kan hoppa mellan dem. Längden mellan platåerna är ca 2,5 meter. Vill du inte hoppa mellan dem, klättrar du ner och upp på nästa.",
    "rate": 71
  }],
  [1806, 1691, false],
  [1691, 1621, {
    "imgPath": "/images/hinderPics/Rope-Climb-Tough-printupploest-127-620x413.jpg",
    "name": "Rope Climb",
    "text": "Klättra rakt uppåt och slå i klockan.",
    "rate": 47
  }],
  [1621, 1601, false],
  [1601, 1516, {
    "imgPath": "/images/hinderPics/ig-zabakii-Photo-by-Jacques-Holst-jacquesholst.com-CC-by-nc-sa-20160903-09-27-17-620x413.jpg",
    "name": "Ninja Jump",
    "text": "Det finns 2 sätt att göra detta. Antingen tar du det lugnt och stannar och greppar varje platsform efter varje hopp med händerna.\n\nI det andra alternativet använder du inte händerna, och istället hoppar från platform till platform utan att stanna.\n\nI denna teknik är snabbhet och timing det väsentliga.",
    "rate": 65
  }],
  [1516, 1396, false],
  [1396, 1336, {
    "imgPath": "/images/hinderPics/ig-zabakii-Photo-by-Jacques-Holst-jacquesholst.com-CC-by-nc-sa-20160903-14-14-26-620x413.jpg",
    "name": "Trampoline Jump",
    "text": "Trampolinen står 4 meter upp från vattenytan. Det är inte mer att göra än att bita ihop och hoppa!",
    "rate": 95
  }],
  [1336, 1032, false],
  [1032, 925, {
    "imgPath": "/images/hinderPics/Platinum-Rig-TOUGHEST_24H_28-29.06.2015-43-620x413.jpg",
    "name": "Platinum Rig",
    "text": "Ett hinder för grepp och teknik. Hindret varieras alltid genom olika kombinationer av grepp som hänger ned. Allt från ringar och monkeybar, till bollar, rep och rörliga stänger. Hindret är ca 10 meter långt.",
    "rate": 46
  }],
  [925, 882, {
    "imgPath": "/images/hinderPics/TOUGHEST_24H_28-29.06.2015-5.jpg",
    "name": "7K Run",
    "text": "Löb 7 kilometer."
  }],
  [882, 822, {
    "imgPath": "/images/hinderPics/umea-98-620x413.jpg",
    "name": "Spinning Wheels",
    "text": "Se till att du har ett bra grepp om hjulet när den når botten, och använda momentumet i gunget för att nå nästa hjul.",
    "rate": 50
  }],
  [822, 792, "Water Cross"],
  [792, 617, false],
  [617, 567, {
    "imgPath": "/images/hinderPics/Super-Slide-JG_150523_Toughest_Stockholm_1242-620x413.jpg",
    "name": "Super Slide",
    "text": "Sätt dig ner och håll in armar och ben.",
    "rate": 86
  }],
  [567, 207, false],
  [207,142, {
    "imgPath": "/images/hinderPics/Ramp-Jacques-Holst-sjakholst@gmail.com-Photo-by-Jacques-Holst-bit.ly-jholstpics-CC-by-nc-sa-20150502-11-11-16-620x383.jpg",
    "name": "Ramp",
    "text": "Rampen är ca 4,5m hög och bemästras genom att ta sig upp på den. Väl uppe finns det två sätt att ta sig ner. Antingen genom brandstång eller stege.",
    "rate": 70
  }],
  [142, 0, {
    "imgPath": "/images/hinderPics/Elite_Pics_profil-1024x683.jpg",
    "name": "Goal",
    "text": "Gratis - du är Toughest!"
  }]
]


export class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      strokeDashoffset: 5123,
      scroll:0,
      hinder: false
    }
    this.updateMapPath = this.updateMapPath.bind(this);
  }

  componentDidMount() {
    // initialize svg
    var node = this.refs.sparkPath;
    var length = ~~ node.getTotalLength();
    this.offsetTarget = length;
    node.style.strokeDasharray = length + ' ' + length;
  }
  updateMapPath(ratio){
    this.setState({
      strokeDashoffset: this.offsetTarget*(1-ratio)
    })
    //get correct hinder from path position
    for (var i = 0; i < hinders.length; i++) {
      if (this.offsetTarget*(1-ratio) < hinders[i][0] && this.offsetTarget*(1-ratio) >= hinders[i][1]) {
        this.setState({
          hinder: hinders[i][2],
        })
      }
    }
  }

  render(){
    return (
      <div style={styles.container}>
        <div style={styles.hinder}>

        </div>

        <VelocityTransitionGroup enter={{animation: "fadeIn"}} runOnMount={true} leave={{animation: "fadeOut"}}>
          {this.state.hinder ?
            <div>
              <Hinder hinder={this.state.hinder} style={styles.hinder}/>
            </div>
            :
            ""
          }
        </VelocityTransitionGroup>

        <SparkProxy.div proxyId="hero" className="hero">
          <SparkScroll.span
            proxy="hero"
            callback={this.updateMapPath }
            timeline={{'topTop-100':0, 'topTop+4000':0}}
            style={styles.map}
          >

            <svg width="1330px" height="1000px" viewBox="0 0 1330 1000" version="1.1">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                  ref="sparkPath"
                  style={{strokeDashoffset: this.state.strokeDashoffset}}
                  d="M1201.372,672.715c-8.167-0.334-26.016,1.027-34.667,1.5c-11.436,0.625-21.604,0.075-33.31,0.166
                  c-14.471,0.113-32.851-0.553-47.071,1.623c-9.819,1.502-9.36,5.191-5.729,15.154c2.764,7.582,11.414,11.569,18.777,16.246
                  c9.582,6.086,17.894,4.264,29.532,4.953c12.91,0.765,28.55,0.24,41.468,0.857c6.534,0.312,11.126,0.723,17.667,0.833
                  c5.39,0.092,10.62-0.333,16-0.333c3.837,0,8.164-0.334,12-0.334c6.034,0,13.651,0.066,19.666,0.334
                  c5.815,0.259,9.513-0.06,15.334,0c4.791,0.048,9.003,0.092,13.796,1.166c2.545,0.57,4.424,4.022,5.537,6.167
                  c1.597,3.075,2.934,7.476,4.498,10.57c1.34,2.649,2.87,5.673,4.369,8.167c1.686,2.806,1.068,5.036,0.14,8.465
                  c-0.702,2.59-1.368,5.76-2.174,8.298c-0.879,2.77-1.616,2.873-2.454,5.656c-0.446,1.482-2.799,5.98-2.562,7.484
                  c-2.198,0.153-4.598-0.39-6.817-0.479c-4.446-0.18-8.864-0.328-13.338-0.328c-9.278,0-18.45-0.486-27.707-0.824
                  c-7.62-0.278-15.159-1.468-22.768-1.979c-3.343-0.225-7.043-0.826-10.354-1.362c-3.026-0.49-5.64-0.35-8.672-0.879
                  c-3.894-0.68-7.785-1.047-11.714-1.459c-4.134-0.434-8.44-0.795-12.6-0.833c-5.896-0.055-11.533-1.079-17.354-1.87
                  c-2.897-0.394-5.772-0.776-8.662-1.155c-3.628-0.475-6.642-1.604-10.118-2.483c-6.73-1.703-13.853-1.911-20.729-2.681
                  c-2.667-0.299-7.355,0.11-9.062-2.444c-1.752-2.623-1.653-7.025-2.759-10.009c-1.427-3.854-2.787-7.454-3.614-11.499
                  c-1.601-7.82-5.994-12.145-11.717-16.688c-2.709-2.15-6.252-6.408-8.333-9.167c-2.857-3.787-6.411-6.094-5.557-10.883
                  c0.826-4.629-0.934-10.182-1.943-14.95c-0.878-4.146-0.869-6.163-1.184-10.352c-0.061-0.808,5.657-4.546,7.517-7.815
                  c2.71-4.766,10.08-13.798,15.5-14.167c7.334-0.5,20.422-0.666,34.334-0.666c8.73,0,17.46,0.292,26.189,0.374
                  c3.865,0.036,7.739,0.072,11.603-0.088c1.214-0.05,2.512-0.031,3.706-0.274c1.882-0.383,1.661-0.882,1.686-2.964
                  c0.038-3.25,0.149-6.498,0.149-9.748c0-2.252,0.122-4.539,0.004-6.786c-0.08-1.529-0.652-2.887-0.846-4.347
                  c-0.232-1.757,1.207-3.86-0.607-4.717c-1.399-0.659-4.969-0.437-6.5-0.666c-2.57-0.386-5.246-0.923-7.833-1.167
                  c-2.431-0.229-3.238-0.208-5.667-0.333c-4.68-0.24-8.558,0.162-12.057-0.217c-5.218-0.565-9.251-0.818-14.527-0.818
                  c-18.772,0-50.395-0.043-69.167,0c-8.77,0.021-9.667-3.337-17-8.334c-6.931-4.724-19.992-30.971-29-32.167
                  c-17.078-2.269-22.307-0.856-25.5-0.333c-4.384,0.719-8.709,2.658-12.828,4.235c-7.337,2.808-14.6,5.807-21.858,8.808
                  c-17.243,7.129-30.498,11.912-47.896,18.66c-4.02,1.56-11.833,4-16,5.5c-6.048,2.177-13.551,4.609-19.666,6.333
                  c-5.159,1.454-10.475,1.889-15.774,2.759c-3.332,0.548-7.523,0.704-10.893,1.241c-7.126,1.135-14.109,0.5-21.333,0.5
                  c-6.626,0-13.944-2.933-20.5-4c-4.156-0.677-9.141-1.976-13.334-2.666c-2.742-0.451-6.988-1.778-9.666-2.5
                  c-1.103-0.298-37.741-8.927-38.834-9.334c-17-6.333-37-0.833-52.833,0.667c-15.723,1.489,4.574,0.629-11.333,0.667
                  c-3.952,0.01-17.881,2.333-21.833,2.333c0.511-0.001-23.178,2.163-22.667,2.167c-13.717,0.254-18.938,1.389-32.833,2.166
                  c-18.312,1.024-58.43-5-68.167-5c-10.833,0-50.833,2.834-93.167,6.667c-17.024,1.541-35.667,4-53.667,1.833
                  c-24.024-2.893-53.942-5.278-77.833-8.666c-28.114-3.987-56-5.334-62.333-7.834c-22.971-9.067-50.536-19.357-74.667-26.333
                  c-18.308-5.293-37.533-7.268-56.158-11.171c-4.987-1.046-9.857-2.582-14.819-3.67c-2.143-0.47-4.433-0.208-6.667-0.606
                  c-2.145-0.382-4.254-1.044-6.409-1.353c-4.158-0.595-7.884-1.158-11.889-2.37c-3.03-0.918-5.958-1.761-8.904-2.89
                  c-2.555-0.979-1.645-4.543-2.321-7.274c-0.593-2.394,0.104-7.491-0.833-9.833c-0.784-1.957-0.683-8.493-1.333-10.5
                  c-1.441-4.442-1.41-12.424-2.333-17c-1.975-9.784-2.935-26.038-3.5-36c-0.521-9.174,6.754-47.578,10.5-55.999
                  c7.508-16.878,19.167-29.666,22.167-31.5c8.804-5.381,12.536,0.055,24.833,4.333c7.667,2.667,10.464,3.801,27.167,9.334
                  c12.77,4.23,33.362,7.37,57.5,13.667c8.403,2.192,22.199,6.646,30,10.833c8.208,4.406,16.85,11.357,21.667,15.667
                  c6.333,5.667,47.543,5.833,67.167,5.833c36.865,0,72.107-0.928,108.836-0.5c59.228,0.688,117.35-2.092,176.167-2.666
                  c20.688-0.201,40.443-2.834,61.5-2.834c43.364,0,112.5,4.667,155.834,7.334c20.993,1.292,61.133-3.167,82.166-3.167
                  c19.807,0,54.334,7.5,57.84,8.165c3.247,0.616,16.327,18.942,21.996,28.001c4.794,7.66,11.482,18.694,15.833,22.5
                  c2.667,2.333,31.851-2.92,48.667-3.167c11.155-0.164,24.833-2.833,29.833-0.166c6.498,3.466,22.665,20.874,35.667,31
                  c5.253,4.091,10.263,8.511,15.28,12.883c3.433,2.991,6.716,6.504,10.375,9.194c1.294,0.952,2.817,1.295,4.224,2.125
                  c1.666,0.983,3.128,2.274,4.634,3.479c1.568,1.253,2.475,3.026,4.025,4.316c0.743,0.618,1.804,1.016,2.461,1.703
                  c0.536,0.56,4.742,5.096,5.334,5.634c2.112,1.926,4.25-2.301,6.333-4.333c1.186-1.157,1.92-1.804,3.167-2.834
                  c1.404-1.161,2.204-1.902,3.667-3c1.982-1.487,1.888-2.457,0.298-4.959c-1.054-1.659-2.558-2.992-3.628-4.708
                  c-0.911-1.462-1.899-2.844-2.995-4.167c-1.411-1.704-3.055-4.447-4.158-6.369c-2.734-4.765-5.153-8.726-8.184-13.463
                  c-2.066-3.23-4.296-6.866-6-10.334c-0.566-1.152-4.166-6.031-5.5-8.333c-3.503-6.047-5.841-9.69-9.667-15.5
                  c-2.505-3.804-4.166-9.667-6.666-12.667c-2.637-3.164-7.525-5.59-9.667-9.166c-6.284-10.494-30.333-24.668-32-34.335
                  c0.333-7.833,9.678-35.933,19-51.002c7.446-12.035,25.36-27.149,35.167-37.165c9.983-10.197,17.632-15.061,26.166-26.167
                  c13.545-17.627,28.167-44,38-61.833c13.65-24.758,21.828-61,27.824-74.294c2.182-4.838,20.629,2.101,25.538,6.574
                  c3.886,3.54,2.8,9.221-4.072,23.669c-11.633,24.458-15.012,37.967-25.462,62.885c-9.544,22.76-32.549,50.833-41.166,74
                  c-5.466,14.692-11.2,28.153-15.334,41.666c-4.665,15.248-9.333,24.666-7.666,42.999c1.896,20.844,8.291,44.363,19.833,61.833
                  c0.553,0.836,2.979,2.634,3.462,3.513c0.919,1.674,0.52,1.399,1.855,2.783c1.368,1.42,3.166,3.405,4.85,4.371
                  c2.101,1.207,4.807,4.132,6.666,5.667c4.579,3.781,7.698,9.568,13.334,11.833c1.941,0.78,2.541-0.974,4.301-2.329
                  c1.757-1.354,2.312-3.152,3.394-5.003c0.996-1.704,2.438-2.933,3.642-4.459c1.037-1.314,3.025-2.587,3.83-4.042
                  c1.015-1.838,3.482-3.981,4.834-5.5c1.679-1.889,3.828-4.082,5.5-6c2.713-3.113-0.559-5.378-0.667-9.666
                  c-0.093-3.672-0.883-8.2-1.5-11.834c-0.516-3.042-1.119-6.176-1.667-9.166c-0.73-3.982-0.475-6.89-2-10.667
                  c-0.597-1.476-0.545-4.584-1.336-5.967c-1.169-2.046-0.277-4.835-0.497-7.2c-0.214-2.307-0.756-7.696-1-10
                  c-0.486-4.606-0.58-11.238-1.167-15.833c-1-7.833,6.5-13.165,11.334-19.667c7.581-10.197,13.684-19.739,18.666-31.167
                  c2.834-6.5,3.582-14.128,2.834-25.5c-1.227-18.645-3.334-30.834-2.667-47.167c0.402-9.849,12.749-47.52,17.593-61.982
                  c2.74-8.183,4.574-5.852,14.407-5.519c7.725,0.262,15.667,5.167,23.086,9.516c3.812,2.235,1.37,25.692-8.753,57.15
                  c-4.666,14.5-12.657,16.559-15.833,31.5c-0.583,2.743,5.5,20.167,10.333,36.167c4.009,13.271,9.108,24.061,12,37.5
                  c3.617,16.814,5.167,39.833,9.5,79.558c1.732,15.88,4.312,30.209-0.833,45.275c-4.038,11.825-3.333,15.501-11.833,40.834
                  c-3.31,9.863-2.794,9.146-3,19.501c-0.106,5.375-0.661,21.295-0.5,26.667c0.071,2.382-0.945,8.37-0.879,10.739
                  c0.063,2.3-0.004,4.057-0.229,6.325c-0.287,2.899-3.892,4.103-7.472,4.424c-3.289,0.295-10.845-0.821-14.097-0.797
                  c-4.273,0.032-3.982,0.286-7.657-1.858c-2.276-1.329-1.295-15.805-0.833-18.5c1-5.833,0.555-3.54,1.5-14.166
                  c0.295-3.318,0.132-13.672,2.333-16.167c2.5-2.834,0.119,0.019,2.5-2.834c2.281-2.733,3.754-1.479,6.5-7.333
                  c0.485-1.033,1.397-3.062,1.459-4.182c0.148-2.683,0.479-2.653,0.482-4.596c0.007-3.275-0.156-4.173-1.29-7.714
                  c-0.753-2.35-1.757-4.321-3.151-6.342c-1.6-2.316-2.811-3.337-5.333-4.5c-1.708-0.787-3.562-2.044-5.333-2.667
                  c-3.94-1.386-8.29-1.819-12.621-0.703c-3.635,0.937-6.967,1.926-9.379,5.037c-1.257,1.622-3.935,4.144-4.801,5.971
                  c-0.77,1.622-1.59,3.382-2.24,5.029c-1.66,4.2-0.715,7.915,0.509,12.004c1.309,4.375,4.129,8.141,7.529,11.127
                  c2.02,1.774,8.223,3.517,11.503,4.202c1.541,0.322,10.152-0.797,13.666-2.5"
                  id="Path-13"
                  stroke="#70CE44"
                  strokeWidth="6">
                </path>
              </g>
            </svg>

          </SparkScroll.span>



        </SparkProxy.div>
        <img src="images/map.jpg" style={styles.img} />



      </div>
    );
  }
}
