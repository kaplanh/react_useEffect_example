//?========================================================
//?                  USEEFFECT HOOK
//?========================================================

//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1,var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

// 'useEffect'  nedir ?
// :boom: Bir component'in yaşam döngüsüne entegre olmak ve belirli durumlarda otomatik olarak çalışmasını sağlamak için kullanılan bir hook'tur
// :white_check_mark:  Genellikle component oluşturulduğunda, güncellendiğinde veya kaldırıldığında belirli işlemlerin yapılması gerektiğinde kullanılır.
// :white_check_mark:  API'lerden veri almak, veri tabanında veri güncellemek gibi işlemler useEffect içerisinde yapılabilir.
// :white_check_mark:   İlgili component'e herhangi bir event dinleyicisi eklemek için useEffect kullanılabilir. Örneğin,;bir butona tıklandığında bir fonksiyonun tetiklenmesi gerekiyorsa, useEffect içerisindeki kodlar ile event dinleyicisi atanabilir.