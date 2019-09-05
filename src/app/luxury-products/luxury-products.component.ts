import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-luxury-products',
  templateUrl: './luxury-products.component.html',
  styleUrls: ['./luxury-products.component.scss']
})
export class LuxuryProductsComponent implements OnInit {

  portada_img;
  portada_link;
  title_text;
  bar_1_img;
  bar_1_link;
  intro_text_1;
  intro_text_2;
  bar_2_img;
  bar_2_link;
  product_1_link;
  product_1_desc;
  product_1_img;
  product_1_title;
  product_1_name;
  product_1_offer;
  product_1_price;
  product_1_old;

  products: any = []
  product: any = {}
  constructor() { }

  ngOnInit() {
    this.portada_img = '';
    this.portada_link = '';
    this.title_text = '';
    this.bar_1_img = '';
    this.bar_1_link = '';
    this.intro_text_1 = '';
    this.intro_text_2 = '';
    this.bar_2_img = '';
    this.bar_2_link = '';
    this.product = {
      link: '',
      desc: '',
      img: '',
      title: '',
      name: '',
      price: '',
      offer: '',
      old: '',
    }
    this.products.push(this.product);
    this.products.push(this.product);
    this.products.push(this.product);
    this.products.push(this.product);
    this.products.push(this.product);
    this.products.push(this.product);
    this.products.push(this.product);
    this.products.push(this.product);
  }

  async edit(element) {

    switch (element) {
      case 'PORTADA':
        {
          /*
          Swal.fire({
            text: '<html><head></head><body>' + (<HTMLDivElement>document.getElementById('main')).outerHTML + '</body></html>',
            width: '850px',
          })*/
          const { value: formValues } = await Swal.fire({
            html:
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>IMAGE</strong></p> <input id="input1" class="swal2-input" value="' + this.portada_img + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>LINK</strong></p> <input id="input2" class="swal2-input" value="' + this.portada_link + '">',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            preConfirm: () => {
              return [
                (<HTMLInputElement>document.getElementById('input1')).value,
                (<HTMLInputElement>document.getElementById('input2')).value
              ]
            }
          })
          if (formValues) {
            this.portada_img = formValues[0];
            this.portada_link = formValues[1];
            (<HTMLInputElement>document.getElementById('portada_img')).src = this.portada_img;
            (<HTMLLinkElement>document.getElementById('portada_link')).href = this.portada_link;
          }
        }; break;
      case 'TITLE':
        {
          const { value: formValues } = await Swal.fire({
            html:
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>TEXT</strong></p> <textarea style="margin: 16.45px 0px; width: 471px; height: 309px;" type="textarea" id="input1" class="swal2-input" value="' + this.title_text + '">',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            preConfirm: () => {
              return [
                (<HTMLTextAreaElement>document.getElementById('input1')).value,
              ]
            }
          })
          if (formValues) {
            this.title_text = formValues[0];
            (<HTMLParagraphElement>document.getElementById('title')).innerHTML = this.title_text;
          }
        }; break;
      case 'BAR_1':
        {
          const { value: formValues } = await Swal.fire({
            html:
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>IMAGE</strong></p> <input id="input1" class="swal2-input" value="' + this.bar_1_img + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>LINK</strong></p> <input id="input2" class="swal2-input" value="' + this.bar_1_link + '">',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            preConfirm: () => {
              return [
                (<HTMLInputElement>document.getElementById('input1')).value,
                (<HTMLInputElement>document.getElementById('input2')).value
              ]
            }
          })
          if (formValues) {
            this.bar_1_img = formValues[0];
            this.bar_1_link = formValues[1];
            (<HTMLInputElement>document.getElementById('bar_1_img')).src = this.bar_1_img;
            (<HTMLLinkElement>document.getElementById('bar_1_link')).href = this.bar_1_link;
          }
        }; break;
      case 'INTRO_TEXT_1':
        {
          const { value: formValues } = await Swal.fire({
            html:
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>TEXT</strong></p> <textarea style="margin: 16.45px 0px; width: 471px; height: 309px;" type="textarea" id="input1" class="swal2-input">' + this.intro_text_1 + '</textarea>',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            preConfirm: () => {
              return [
                (<HTMLTextAreaElement>document.getElementById('input1')).value,
              ]
            }
          })
          if (formValues) {
            this.intro_text_1 = formValues[0];
            (<HTMLParagraphElement>document.getElementById('intro_text_1')).innerHTML = this.intro_text_1;
          }
        }; break;
      case 'INTRO_TEXT_2':
        {
          const { value: formValues } = await Swal.fire({
            html:
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>TEXT</strong></p> <textarea style="margin: 16.45px 0px; width: 471px; height: 309px;" type="textarea" id="input1" class="swal2-input">' + this.intro_text_2 + '</textarea>',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            preConfirm: () => {
              return [
                (<HTMLTextAreaElement>document.getElementById('input1')).value,
              ]
            }
          })
          if (formValues) {
            this.intro_text_2 = formValues[0];
            (<HTMLParagraphElement>document.getElementById('intro_text_2')).innerHTML = this.intro_text_2;
          }
        }; break;
      case 'BAR_2':
        {
          const { value: formValues } = await Swal.fire({
            html:
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>IMAGE</strong></p> <input id="input1" class="swal2-input" value="' + this.bar_2_img + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>LINK</strong></p> <input id="input2" class="swal2-input" value="' + this.bar_2_link + '">',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            preConfirm: () => {
              return [
                (<HTMLInputElement>document.getElementById('input1')).value,
                (<HTMLInputElement>document.getElementById('input2')).value
              ]
            }
          })
          if (formValues) {
            this.bar_2_img = formValues[0];
            this.bar_2_link = formValues[1];
            (<HTMLInputElement>document.getElementById('bar_2_img')).src = this.bar_2_img;
            (<HTMLLinkElement>document.getElementById('bar_2_link')).href = this.bar_2_link;
          }
        }; break;
      case 'PRODUCT_2':
        {
          const { value: formValues } = await Swal.fire({
            html:
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>LINK</strong></p> <input id="input1" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].link + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Descuento</strong></p> <input id="input2" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].desc + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Imagen</strong></p> <input id="input3" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].img + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Título</strong></p> <input id="input4" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].title + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Nombre</strong></p> <input id="input5" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].name + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Oferta</strong></p> <input id="input6" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].offer + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Precio</strong></p> <input id="input7" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].price + '">' +
              '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Precio anterior</strong></p> <input id="input8" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[1].old + '">',
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            preConfirm: () => {
              return [
                (<HTMLInputElement>document.getElementById('input1')).value,
                (<HTMLInputElement>document.getElementById('input2')).value,
                (<HTMLInputElement>document.getElementById('input3')).value,
                (<HTMLInputElement>document.getElementById('input4')).value,
                (<HTMLInputElement>document.getElementById('input5')).value,
                (<HTMLInputElement>document.getElementById('input6')).value,
                (<HTMLInputElement>document.getElementById('input7')).value,
                (<HTMLInputElement>document.getElementById('input8')).value
              ]
            }
          })
          if (formValues) {
            this.products[1].link = formValues[0];
            this.products[1].desc = formValues[1];
            this.products[1].img = formValues[2];
            this.products[1].title = formValues[3];
            this.products[1].name = formValues[4];
            this.products[1].offer = formValues[5];
            this.products[1].price = formValues[6];
            this.products[1].old = formValues[7];
            if (this.products[1].link) (<HTMLLinkElement>document.getElementById('product_2_link')).href = this.products[1].link;
            if (this.products[1].desc) (<HTMLParagraphElement>document.getElementById('product_2_desc')).textContent = this.products[1].desc;
            if (this.products[1].img) (<HTMLImageElement>document.getElementById('product_2_img')).src = this.products[1].img;
            if (this.products[1].title) (<HTMLParagraphElement>document.getElementById('product_2_title')).textContent = this.products[1].title;
            if (this.products[1].name) (<HTMLParagraphElement>document.getElementById('product_2_name')).textContent = this.products[1].name;
            if (this.products[1].offer) (<HTMLParagraphElement>document.getElementById('product_2_offer')).textContent = this.products[1].offer;
            if (this.products[1].price) (<HTMLParagraphElement>document.getElementById('product_2_price')).textContent = this.products[1].price;
            if (this.products[1].old) (<HTMLParagraphElement>document.getElementById('product_2_old')).textContent = this.products[1].old;
          }
        }; break;
    }
  }
  async edit_product_1() {
    const { value: formValues } = await Swal.fire({
      html:
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>LINK</strong></p> <input id="input1" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].link + '">' +
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Descuento</strong></p> <input id="input2" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].desc + '">' +
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Imagen</strong></p> <input id="input3" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].img + '">' +
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Título</strong></p> <input id="input4" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].title + '">' +
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Nombre</strong></p> <input id="input5" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].name + '">' +
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Oferta</strong></p> <input id="input6" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].offer + '">' +
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Precio</strong></p> <input id="input7" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].price + '">' +
        '<p style="font-family:sans-serif;margin-bottom:-10px;"><strong>Precio anterior</strong></p> <input id="input8" style="margin-bottom:-5px;" class="swal2-input" value="' + this.products[0].old + '">',
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      preConfirm: () => {
        return [
          (<HTMLInputElement>document.getElementById('input1')).value,
          (<HTMLInputElement>document.getElementById('input2')).value,
          (<HTMLInputElement>document.getElementById('input3')).value,
          (<HTMLInputElement>document.getElementById('input4')).value,
          (<HTMLInputElement>document.getElementById('input5')).value,
          (<HTMLInputElement>document.getElementById('input6')).value,
          (<HTMLInputElement>document.getElementById('input7')).value,
          (<HTMLInputElement>document.getElementById('input8')).value
        ]
      }
    })
    if (formValues) {
      this.products[0].link = formValues[0];
      this.products[0].desc = formValues[1];
      this.products[0].img = formValues[2];
      this.products[0].title = formValues[3];
      this.products[0].name = formValues[4];
      this.products[0].offer = formValues[5];
      this.products[0].price = formValues[6];
      this.products[0].old = formValues[7];
      if (this.products[0].link) (<HTMLLinkElement>document.getElementById('product_1_link')).href = this.products[0].link;
      if (this.products[0].desc) (<HTMLParagraphElement>document.getElementById('product_1_desc')).textContent = this.products[0].desc;
      if (this.products[0].img) (<HTMLImageElement>document.getElementById('product_1_img')).src = this.products[0].img;
      if (this.products[0].title) (<HTMLParagraphElement>document.getElementById('product_1_title')).textContent = this.products[0].title;
      if (this.products[0].name) (<HTMLParagraphElement>document.getElementById('product_1_name')).textContent = this.products[0].name;
      if (this.products[0].offer) (<HTMLParagraphElement>document.getElementById('product_1_offer')).textContent = this.products[0].offer;
      if (this.products[0].price) (<HTMLParagraphElement>document.getElementById('product_1_price')).textContent = this.products[0].price;
      if (this.products[0].old) (<HTMLParagraphElement>document.getElementById('product_1_old')).textContent = this.products[0].old;
    }
  }
}