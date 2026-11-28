/* Data Muat Gerbong: kota, level, dan tema latar. Edit di sini saja, tidak perlu menyentuh index.html.
   lv: [jumlah kereta, lebar, tinggi, jumlah rintangan] per level (level 1-5: 1 kereta, 6-10: 2 kereta, 11-15: 3 kereta)
   th: [warna tanah, warna pohon/batu di sisi]   bon: indeks level (mulai 0) yang diikuti ronde bonus sesudahnya */
const GB_DATA=(()=>{
  const G=['#58a23f','#2f6f2a'],S=['#dbe9ef','#3f7d4a'],D=['#c48a55','#8c6038'],R=['#aebdc4','#6f8088'];
  return{
    cities:['Seattle, Washington','Boise, Idaho','Salt Lake City, Utah','Denver, Colorado','Albuquerque, New Mexico',
            'Omaha, Nebraska','Kansas City, Missouri','Chicago, Illinois','Nashville, Tennessee','Atlanta, Georgia',
            'Charlotte, North Carolina','Washington, D.C.','Philadelphia, Pennsylvania','Newark, New Jersey','New York, New York'],
    lv:[[1,4,6,0],[1,5,6,0],[1,5,7,1],[1,6,7,2],[1,6,8,3],
        [2,4,6,1],[2,4,7,2],[2,5,7,3],[2,5,8,4],[2,5,8,5],
        [3,3,7,1],[3,3,8,2],[3,3,9,3],[3,3,9,4],[3,3,10,5]],
    th:[G,S,D,S,D,G,G,R,G,G,G,R,S,R,R],
    bon:[4,9]
  };
})();
