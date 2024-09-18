





<div align="center" id="readme-top">
  <a href="[https://github.com/othneildrew/Best-README-Template](https://github.com/user-attachments/assets/bf95f43f-0cb7-423f-940d-ca261ce8cc9a)">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Web MMS Documentation</h3>

  <p align="center">
    Guide to edit the Web MMS Company Profile
    <br />
    <a href="https://github.com/othneildrew/Best-README-Template"><strong>Go To Website</strong></a>
  </p>
</div>


## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Clone The Project
#### Prerequisite 

You need this pre-requisite package before running the project.
Bun
  ```sh
  # Open Your Powershell in windows and run this command below. make sure pake windows 10 keatas
  powershell -c "irm bun.sh/install.ps1|iex"
  ```
 untuk memastikan bahwa bun sudah terinstall, jalan kan `bun -v` , dan tampilan yang didapat akan menjadi 
 ```sh
# bun -v
1.1.27
```
### Installation

_Follow this instruction to clone and edit the MMS Web._

1. Clone the repo
 ```sh
git clone https://github.com/anazahirah/web-mms.git
 ```

Kemudian lakukan Navigasi Kedalam Folder dengan menggunakan kode `cd web-mms` pada terminal

2. Install Bun packages
```sh
bun install
```

3. Run The Project
```sh
bun dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Directory Structure

Struktur directory pada website MMS adalah sebagai berikut : 
```sh
| components
| composables # Ini adalah Directory
	| useBreadCrumb.ts # Ini adalah File
| pages
	| about # Ini Adalah Directory
		| slug.vue # Ini adalah File
	| business
		| slug.vue
	| client
		| slug.vue
	| index.vue
	
| content
	| about
		| visi.md
		| misi.md
	| business
		| electrical.md
		| informatika.md
		| etc.
	| client
		| 1.loreal.md
		| 2.mayora.md
		| 3.lg.md
		| etc.
| public
	| yamaha.png
	| lg.png
	| etc.
| constant
	| data.ts 

```


#  Pages

  Secara singkat, pages merupakan directory entry point untuk merender halaman yang sudah dibuat.
-------------------------------------------------------------------------------

### pages/index
   pages/index merupakan halaman utama dalam web MMS ini. didalam pages/index terdapat banyak komponen yang dibuat dan disatukan dalam folder components/Home. 


### pages/business
   pages/business merupakan halaman yang disediakan untuk menghasilkan tampilan mengenai lini bisnis yang ada didalam MMS


### pages/client 
   pages/client merupakan halaman yang disediakan untuk menghasilkan tampilan mengenai client mana saja yang sudah bekerja samad dengan PT Mechatronica

### pages/about 
   pages/client merupakan halaman yang disediakan untuk menghasilkan tampilan mengenai visi dan misi PT Mechatronica




# Editing

 Section ini adalah guideline bagaimana cara untuk melakukan editing terhadap konten pada pages client, about dan business.
-------------------------------------------------------------------------------

##### Editing About
 Buka file pada path tujuan `/content/about/`. didalamnya akan ditemukan 2 file yaitu *misi.md*  dan *visi.md*

bentuk markdown pada kedua file tersebut adalah sama, contoh salah satunya terdapat dibawah ini : 

```mdx
---

title: "Misi"

description: "Misi Mechatronics"

---  

# Misi Mechatronics

  

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident, autem expedita neque sed voluptates voluptatum similique voluptatem fuga ipsum qui odio. Vitae eligendi ullam ratione illum aspernatur quam quo iste id soluta ad ipsum ab rerum, sit fugiat assumenda voluptatem consequuntur, necessitatibus rem et. Illo ea assumenda incidunt maiores.
```

Lakukan pengeditan konten dimulai dari `# Misi Mechatronics` kebawah. jangan mengubah meta data yang terdapat diatas, yaitu title dan description.

! Hal ini berlaku untuk konten pada *misi* dan juga *visi*


-------------------------------------------------------------

##### Editing Client 
\
 untuk melakukan editing pada konten client, anda memerlukan 2 tahap, yaitu :
 
 1. melakukan upload image client pada directory `/public` 
 2. menambahkan file pada directory `/content/client`


1. Tahap 1 
	1. Pilih gambar logo client yang ingin dimasukan. pastikan dia memiliki background yang transparant sehingga tidak merusak tampilan
	2. Convert gambar yang sudah dipilih kedalam format .webp melaui image converter pada internet. anda bisa melakukan convert pada  [link ini](https://www.freeconvert.com/png-to-webp)
	3. Ubah nama file gambar menjadi nama yang mudah, untuk melakukan standarisasi, ubah nama menjadi *nama logo.webp*. ex : **yamaha.webp**
	4. Drag and drop image yang sudah diubah nama dan diubah bentuk menjadi webp kedalam folder `/public`
2. Tahap 2
	1. Tambahkan file pada directory `/content/client/` dengan format `[urutan].[nama].md`, sebagai contoh : `7.nike.md`. *on notes: angka urutan merupakan incremental(penambahan 1) terhadap urutan terakhir pada folder tersebut. misa: jika file terakhir adalah `7.nike.md` maka file selanjutnya adalah `8.adidas.md`*
	2. Open file tersebut dan tambahkan konfigurasi berikut kedalam file :

```sh
---

title: # Ini merupakan nama client, nama client pada bagian ini boleh besar dan di spasi

flag: # ini merupakan bagian navigasi yang diperlukan oleh pages client/[slug].vue untuk menentukan arah navigasi. sehingga isi dari bagian ini harus sama dengan nama file yang baru saja anda buat tanpa urutanya. 

# Example : 
# File yang baru dibuat adalah :  8.dunkin-donut.md
# maka isi dari flag adalah : dunkin-donut

image-url: # ini merupakan path untuk merender image yang sudah dimasukan pada tahap 1. isi dari bagian ini adalah nama image yang sudah dimasukan beserta ekstensinya dengan imbuhan / pada depan file.

# Example : 
# Image yang baru dimasukan : dunkin-donut.webp
# maka isi dari image-url adalah : /dunkin-donut.webp


tahun: # ini merupakan tahun dimana mekatronik bekerja sama dengan client tersebut

layanan: # ini merupakan jenis layanan yang dilakukan mechatronic untuk bekerjasama dengan client tersebut

---

# Bagian Dibawah ini adalah bagian untuk yang dapat diedit untuk isi dari kontent client tersebut.

 Yamaha

  

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident, autem expedita neque sed voluptates voluptatum similique voluptatem fuga ipsum qui odio. Vitae eligendi ullam ratione illum aspernatur quam quo iste id soluta ad ipsum ab rerum, sit fugiat assumenda voluptatem consequuntur, necessitatibus rem et. Illo ea assumenda incidunt maiores.
```


kemudian , buka file pada path `/constant/data.ts` dan cari dan edit data yang sesuai dengan instrksi dibawah 

```javascript
export const client = [

{

image: "/lg.png", // ini merupakan image untuk dirender pada halaman utama. masukan gambar sesuai dengan cara yang sama saat mengisi image-url diatas

alt: "Logo LG", // ini merupakan deskripsi jika gambar gagal dimuat, sehingga bagian ini harus deskriptif terhadap apa gambar yang ditampilkan

url: "/client/lg", // ini merupakan alamat navigasi yang diperlukan pada tombol read more pada halaman utama. cara menuliskan nya adalah seperti pada folder /content/client, tetapi imbuhan urutan diganti dengan /client/.

// Example : 
// Pada /content/client : 8.dunkin-donut.md
// maka pada url: /client/dunkin-donut



description:

"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, repellat!", // Ini merupakan deskrisi terhadap client 

},

// ! JIKA INGIN MENAMBAHKAN CLIENT BARU, MAKA COPY DAN PASTE 1 OBJECT DARI YANG DIWAKILI DENGAN 1 {} DAN BERISIKAN IMAGE, ALT, URL DAN DESCRIPTION.

];
```

##### Editing Business  

 Melakukan edit pada bagian business tidaklah susah , sama seperti hal nya di bagian editing sebelum-sebelumnya, bukalah business yang ingin diedit pada folder `/content/business/bisnis yang ingin dibuka`. kemudian ubahlah pada bagian yang ditunjukan dibawah : 

```
---

title: "Electrical"

description: "Bisnis Electrical"

flag: "electrical"

---

[UBAH DIBAWAH SINI]

# Electrical

  

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident, autem expedita neque sed voluptates voluptatum similique voluptatem fuga ipsum qui odio. Vitae eligendi ullam ratione illum aspernatur quam quo iste id soluta ad ipsum ab rerum, sit fugiat assumenda voluptatem consequuntur, necessitatibus rem et. Illo ea assumenda incidunt maiores.
```


kemudian , buka file pada path berikut `/constant/data`, dan carilah variable yang bernamakan dataCarousel dan ubah data sesuai petunjuk dibawah : 

```javascript
export const dataCarousel = [

{
flag: "mekanikal", // flag merupakan tanda object ini merupakan bagian dari page mana, pada kasus ini. object ini adalah untuk mekanikal
url: "/business/mekanikal",
images: [  
"https://encrypted-tbn0.gstatic.com/images? q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s", // sehingga images pada object ini merupakan image untuk business mekanikal. dan ini berlaku untuk semua object yang berada pada dataCarousel
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
],},
{
flag: "electrical",
url: "/business/electrical",
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
],},
{
flag: "konsultan",
url: "/business/konsultan",
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
],},
{
flag: "informatika",
url: "/business/informatika",
images: [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh3dqVPuePnnCxxKmoztE3wZNQb07uEbBhQ&s",
],},
];
```

-------------------------------------------------------------

