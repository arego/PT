function createBody() {
    const link = "http://en.wikipedia.org/wiki/Periodic_table";
    const unsupport ="Your browser does not support ruby tag"
    var main = $('main');
    main.attr('title', 'Periodic Table');
    main.innerHTML = '<table>\
       <caption>Periodic Table of the Elements</caption>\
    <thead>\
        <tr>\
          <th>\
            <span class="group">Group</span>\
            <hr class="line" />\
            <span class="period">Period</span>\
          </th>\
          <th>1</th>\
          <th>2</th>\
          <th>3</th>\
          <th>4</th>\
          <th>5</th>\
          <th>6</th>\
          <th>7</th>\
          <th>8</th>\
          <th>9</th>\
          <th>10</th>\
          <th>11</th>\
          <th>12</th>\
          <th>13</th>\
          <th>14</th>\
          <th>15</th>\
          <th>16</th>\
          <th>17</th>\
          <th>18</th>\
        </tr>\
      </thead>\
        <tbody>\
<tr>\
          <th>1</th>\
          <td class="non_metal">\
            <ruby>\
              <a href="' + link +'" target="_blank">H</a>\
              <rt>1</rt>\
              <rp>' + unsupport +'</rp>\
            </ruby>\
            <p>Hydrogen</p>\
            <p>1.0079</p>\
          </td>\
          <td colspan="16"></td>\
          <td class="noble_gase">\
            <ruby>\
              <a href="' + link +'" target="_blank">He</a>\
              <rt>2</rt>\
              <rp>' + unsupport +'</rp>\
            </ruby>\
            <p>Helium</p>\
            <p>4.0026</p>\
          </td>\
        </tr>\
        <tr>\
          <th>2</th>\
          <td class="alkali">\
            <ruby>\
              <a href="' + link + '" target="_blank">Li</a>\
              <rt>3</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Lithium</p>\
            <p>6.941</p>\
          </td>\
          <td class="alkaline">\
            <ruby>\
              <a href="' + link + '" target="_blank">Be</a>\
              <rt>4</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Beryllium</p>\
            <p>9.0122</p>\
          </td>\
          <td colspan="10" rowspan="2"></td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank">B</a>\
              <rt>5</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Boron</p>\
            <p>10.811</p>\
          </td>\
          <td class="non_metal">\
            <ruby>\
              <a href="' + link + '" target="_blank">C</a>\
              <rt>6</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Carbon</p>\
            <p>12.01</p>\
          </td>\
          <td class="non_metal">\
            <ruby>\
              <a href="' + link + '" target="_blank">N</a>\
              <rt>7</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Nitrogen</p>\
            <p>14.01</p>\
          </td>\
          <td class="non_metal">\
            <ruby>\
              <a href="' + link + '" target="_blank">O</a>\
              <rt>8</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Oxygen</p>\
            <p>16.00</p>\
          </td>\
          <td class="halogen">\
            <ruby>\
              <a href="' + link + '" target="_blank">F</a>\
              <rt>9</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Fluorine</p>\
            <p>19.00</p>\
          </td>\
          <td class="noble_gase">\
            <ruby>\
              <a href="' + link + '" target="_blank">Ne</a>\
              <rt>10</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Neon</p>\
            <p>20.18</p>\
          </td>\
        </tr>\
        <tr>\
          <th>3</th>\
          <td class="alkali">\
            <ruby>\
              <a href="' + link + '" target="_blank">Na</a>\
              <rt>11</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Sodium</p>\
            <p>22.99</p>\
          </td>\
          <td class="alkaline">\
            <ruby>\
              <a href="' + link + '" target="_blank">Mg</a>\
              <rt>12</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Magnesium</p>\
            <p>24.305</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank">Al</a>\
              <rt>13</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Aluminum</p>\
            <p>26.98</p>\
          </td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank">Si</a>\
              <rt>14</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Silicon</p>\
            <p>28.09</p>\
          </td>\
          <td class="non_metal">\
            <ruby>\
              <a href="' + link + '" target="_blank">P</a>\
              <rt>15</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Phosphorus</p>\
            <p>30.97</p>\
          </td>\
          <td class="non_metal">\
            <ruby>\
              <a href="' + link + '" target="_blank">S</a>\
              <rt>16</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Sulfur</p>\
            <p>32.065</p>\
          </td>\
          <td class="halogen">\
            <ruby>\
              <a href="' + link + '" target="_blank">Cl</a>\
              <rt>17</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Chlorine</p>\
            <p>35.453</p>\
          </td>\
          <td class="noble_gase">\
            <ruby>\
              <a href="' + link + '" target="_blank">Ar</a>\
              <rt>18</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Argon</p>\
            <p>39.948</p>\
          </td>\
        </tr>\
        <tr>\
          <th>4</th>\
          <td class="alkali">\
            <ruby>\
              <a href="' + link + '" target="_blank">K</a>\
              <rt>19</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Potassium</p>\
            <p>39.10</p>\
          </td>\
          <td class="alkaline">\
            <ruby>\
              <a href="' + link + '" target="_blank">Ca</a>\
              <rt>20</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Calcium</p>\
            <p>40.078</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank">Sc</a>\
              <rt>21</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Scandium</p>\
            <p>44.96</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank">Ti</a>\
              <rt>22</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Titanium</p>\
            <p>47.867</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >V</a>\
              <rt>23</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Vanadium</p>\
            <p>50.942</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Cr</a>\
              <rt>24</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Chromium</p>\
            <p>51.997</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Mn</a>\
              <rt>25</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Manganese</p>\
            <p>54.938</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Fe</a>\
              <rt>26</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Iron</p>\
            <p>55.845</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Co</a>\
              <rt>27</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Cobalt</p>\
            <p>58.93</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ni</a>\
              <rt>28</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Nickel</p>\
            <p>58.71</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Cu</a>\
              <rt>29</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Copper</p>\
            <p>63.546</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Zn</a>\
              <rt>30</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Zinc</p>\
            <p>65.39</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ga</a>\
              <rt>31</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Gallium</p>\
            <p>69.723</p>\
          </td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ge</a>\
              <rt>32</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Germanium</p>\
            <p>372.64</p>\
          </td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank" >As</a>\
              <rt>33</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Arsenic</p>\
            <p>74.92</p>\
          </td>\
          <td class="non_metal">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Se</a>\
              <rt>34</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Selenium</p>\
            <p>78.96</p>\
          </td>\
          <td class="halogen">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Br</a>\
              <rt>35</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Bromine</p>\
            <p>79.904</p>\
          </td>\
          <td class="noble_gase">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Kr</a>\
              <rt>36</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Krypton</p>\
            <p>83.8</p>\
          </td>\
        </tr>\
        <tr>\
          <th>5</th>\
          <td class="alkali">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Rb</a>\
              <rt>37</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Rubidium</p>\
            <p>85.48</p>\
          </td>\
          <td class="alkaline">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Sr</a>\
              <rt>38</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Strontium</p>\
            <p>87.62</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Y</a>\
              <rt>39</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Yttrium</p>\
            <p>88.906</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Zr</a>\
              <rt>40</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Zirconium</p>\
            <p>91.224</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Nb</a>\
              <rt>41</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Niobium</p>\
            <p>92.91</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Mo</a>\
              <rt>42</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Molybdenum</p>\
            <p>95.94</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Tc</a>\
              <rt>43</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Technetium</p>\
            <p>98</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ru</a>\
              <rt>44</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Ruthenium</p>\
            <p>101.07</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Rh</a>\
              <rt>45</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Rhodium</p>\
            <p>102.91</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Pd</a>\
              <rt>46</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Palladium</p>\
            <p>106.42</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ag</a>\
              <rt>47</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Silver</p>\
            <p>107.87</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Cd</a>\
              <rt>48</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Cadmium</p>\
            <p>112.4</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >In</a>\
              <rt>49</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Indium</p>\
            <p>114.82</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Sn</a>\
              <rt>50</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Tin</p>\
            <p>118.71</p>\
          </td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Sb</a>\
              <rt>51</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Antimony</p>\
            <p>121.76</p>\
          </td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Te</a>\
              <rt>52</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Tellurium</p>\
            <p>127.6</p>\
          </td>\
          <td class="halogen">\
            <ruby>\
              <a href="' + link + '" target="_blank" >I</a>\
              <rt>53</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Iodine</p>\
            <p>126.90</p>\
          </td>\
          <td class="noble_gase">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Xe</a>\
              <rt>54</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Xenon</p>\
            <p>131.30</p>\
          </td>\
        </tr>\
        <tr>\
          <th>6</th>\
          <td class="alkali">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Cs</a>\
              <rt>55</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Cesium</p>\
            <p>132.91</p>\
          </td>\
          <td class="alkaline">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ba</a>\
              <rt>56</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Barium</p>\
            <p>137.34</p>\
          </td>\
          <td class="lanthanide">\
            <p>Lantanoides</p>\
            <p>57-71</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Hf</a>\
              <rt>72</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Hafnium</p>\
            <p>178.49</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ta</a>\
              <rt>73</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Tantalum</p>\
            <p>180.95</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >W</a>\
              <rt>74</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Tungsten</p>\
            <p>183.85</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Re</a>\
              <rt>75</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Rhenium</p>\
            <p>186.21</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Os</a>\
              <rt>76</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Osmium</p>\
            <p>190.23</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Ir</a>\
              <rt>77</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Iridium</p>\
            <p>192.22</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Pt</a>\
              <rt>78</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Platinum</p>\
            <p>195.09</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Au</a>\
              <rt>79</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Gold</p>\
            <p>196.97</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Hg</a>\
              <rt>80</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Mercury</p>\
            <p>200.59</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Tl</a>\
              <rt>81</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Thallium</p>\
            <p>204.37</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Pb</a>\
              <rt>82</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Lead</p>\
            <p>207.2</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Bi</a>\
              <rt>83</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Bismuth</p>\
            <p>208.98</p>\
          </td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Polonium">Po</a>\
              <rt>84</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Polonium</p>\
            <p>209</p>\
          </td>\
          <td class="halogen">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Astatine">At</a>\
              <rt>85</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Astatine</p>\
            <p>210</p>\
          </td>\
          <td class="noble_gase">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Radon">Rn</a>\
              <rt>86</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Radon</p>\
            <p>222</p>\
          </td>\
        </tr>\
        <tr>\
          <th>7</th>\
          <td class="alkali">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Francium">Fr</a>\
              <rt>87</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Francium</p>\
            <p>223</p>\
          </td>\
          <td class="alkaline">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Radium">Ra</a>\
              <rt>88</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Radium</p>\
            <p>226</p>\
          </td>\
          <td class="actinide">\
            <p>Actinides</p>\
            <p>89-103</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Rutherfordium">Rf</a>\
              <rt>104</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Rutherfordium</p>\
            <p>261</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Db</a>\
              <rt>105</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Dubnium</p>\
            <p>262</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Sg</a>\
              <rt>106</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Seaborgium</p>\
            <p>263</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Bohrium">Bh</a>\
              <rt>107</rt>\
                <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Bohrium</p>\
            <p>262</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Hassium">Hs</a>\
              <rt>108</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Hassium</p>\
            <p>265</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Meitnerium">Mt</a>\
              <rt>109</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Meitnerium</p>\
            <p>266</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" title="Darmstadtium">Ds</a>\
              <rt>110</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Darmstadtium</p>\
            <p>281</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Rg</a>\
              <rt>111</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Roentgenium</p>\
            <p>272</p>\
          </td>\
          <td class="transition">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Cn</a>\
              <rt>112</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Copernicium</p>\
            <p>285</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Uut</a>\
              <rt>113</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Ununtrium</p>\
            <p>286</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Fl</a>\
              <rt>114</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Flerovium</p>\
            <p>286</p>\
          </td>\
          <td class="poor">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Uup</a>\
              <rt>115</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Ununpentium</p>\
            <p>288</p>\
          </td>\
          <td class="metalloid">\
            <ruby>\
              <a href="' + link + '" target="_blank" >Lv</a>\
              <rt>116</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Livermorium</p>\
            <p>293</p>\
          </td>\
          <td class="halogen">\
            <ruby>\
              <a href="' + link + '" target="_blank">Uus</a>\
              <rt>117</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Ununseptium</p>\
            <p>294</p>\
          </td>\
          <td class="noble_gase">\
            <ruby>\
              <a href="' + link + '" target="_blank">Uuo</a>\
              <rt>118</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Ununoctium</p>\
            <p>294</p>\
          </td>\
        </tr>\
      </tbody>\
      <tfoot>\
        <tr>\
          <td></td>\
        </tr>\
        <tr>\
          <th colspan="3"><span>Lanthanides</span></th>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">La</a>\
              <rt>57</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Lanthanum</p>\
            <p>138.91</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Ce</a>\
              <rt>58</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Cerium</p>\
            <p>140.12</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Pr</a>\
              <rt>59</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Praseodymium</p>\
            <p>140.91</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Nd</a>\
              <rt>60</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Neodymium</p>\
            <p>144.24</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Pm</a>\
              <rt>61</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Promethium</p>\
            <p>145</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Sm</a>\
              <rt>62</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Samarium</p>\
            <p>150.36</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Eu</a>\
              <rt>63</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Europium</p>\
            <p>151.96</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Gd</a>\
              <rt>64</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Gadolinium</p>\
            <p>157.25</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Tb</a>\
              <rt>65</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Terbium</p>\
            <p>158.92</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Dy</a>\
              <rt>66</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Dysprosium</p>\
            <p>162.5</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Ho</a>\
              <rt>67</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Holmium</p>\
            <p>164.93</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Er</a>\
              <rt>68</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Erbium</p>\
            <p>167.26</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Tm</a>\
              <rt>69</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Thulium</p>\
            <p>168.93</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Yb</a>\
              <rt>70</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Ytterbium</p>\
            <p>173.04</p>\
          </td>\
          <td class="lanthanide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Lu</a>\
              <rt>71</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Lutetium</p>\
            <p>174.97</p>\
          </td>\
        </tr>\
        <tr>\
          <th colspan="3"><span>Actinides</span></th>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Ac</a>\
              <rt>89</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Actinium</p>\
            <p>227</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Th</a>\
              <rt>90</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Thorium</p>\
            <p>232.04</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Pa</a>\
              <rt>91</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Protactinium</p>\
            <p>231</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">U</a>\
              <rt>92</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Uranium</p>\
            <p>238.03</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Np</a>\
              <rt>93</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Neptunium</p>\
            <p>237</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Pu</a>\
              <rt>94</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Plutonium</p>\
            <p>244</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Am</a>\
              <rt>95</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Americium</p>\
            <p>243</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Cm</a>\
              <rt>96</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Curium</p>\
            <p>247</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Bk</a>\
              <rt>97</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Berkelium</p>\
            <p>247</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Cf</a>\
              <rt>98</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Californium</p>\
            <p>251</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Es</a>\
              <rt>99</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Einsteinium</p>\
            <p>252</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Fm</a>\
              <rt>100</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Fermium</p>\
            <p>257</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Md</a>\
              <rt>101</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Mendelevium</p>\
            <p>258</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">No</a>\
              <rt>102</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Nobelium</p>\
            <p>259</p>\
          </td>\
          <td class="actinide">\
            <ruby>\
              <a href="' + link + '" target="_blank">Lr</a>\
              <rt>103</rt>\
              <rp>' + unsupport + '</rp>\
            </ruby>\
            <p>Lawrencium</p>\
            <p>262</p>\
          </td>\
        </tr>\
        <tr>\
          <td>\
            <table>\
              <tbody>\
                <tr class="foot">\
                  <td class="alkali"> Alkali Metals</td>\
                  <td class="alkaline"> Alkaline Earths</td>\
                  <td class="transition"> Transition Metals</td>\
                  <td class="poor"> Poor Metals</td>\
                  <td class="metalloid"> Metalloids</td>\
                  <td class="non_metal">Nonmetals</td>\
                  <td class="halogen">Halogen</td>\
                  <td class="noble_gase"> Noble Gases</td>\
                  <td class="lanthanide">Lanthanides</td>\
                  <td class="actinide">Actinides</td>\
                </tr>\
              </tbody>\
            </table>\
          </td>\
        </tr>\
      </tfoot>\
      </table>';
    document.body.append(main);
}
