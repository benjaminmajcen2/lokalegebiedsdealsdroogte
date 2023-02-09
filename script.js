mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuY2hzcG90dGVycyIsImEiOiJjbGJrdnAycXQwMW1rM25waXF1dHQ4djRhIn0.k00FDSeJrdDFoV_tMw7tLQ';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/benchspotters/cldq91zct000201o15kld8jd9',
        center: [4.388123,51.043351],
        maxBounds: [[1.9954,50.4606],[6.1130,51.6933]],
        zoom: 0.01
    });

    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Waterbufferbos Ten Bos te Aalst (Bufferende landschapsparken op de valleiflanken)</strong><p>‘Waterbufferbos Ten Bos’ in Aalst kan rekenen op de appreciatie van de jury omwille van hoge ambities en complexiteit (in de combinatie van de inrichting van het waterbufferbos, de aanleg van een open bedding voor hemelwaterafvoer en de ontharding en herinrichting van een kruispunt). Ook de rijke samenwerking tussen betrokken partners spreekt in het voordeel van het project.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.088399, 50.906627]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Sponslandschap Gasthuisstraat te Roosdaal (Bufferende landschapsparken op de valleiflanken)</strong><p>De ontharding van een deel van de Roosdaalse Gasthuisstraat en het gedeeltelijk omzetten van WUG-gebied in natte natuur maken dat ‘Sponslandschap Gasthuisstraat’ door de jury in zijn geheel als een interessant project werd bestempeld, dat past in deze oproep. Ten opzichte van vergelijkbare voorstellen in het actieprogramma, werd deze straat als de meest strategische gezien.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.070148,50.837756]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Wolfsgracht Denderleeuw (Bufferende landschapsparken op de valleiflanken)</strong><p>Ook ‘Wolfsgracht Denderleeuw’ is een goed voorbeeld van het type complexe en geïntegreerde projecten waar deze oproep naar zoekt. Het zal inzetten op de reïntegratie van de Wolfsgracht met zijn huidige beperkte potentie voor captatie en infiltratie. Een dwarsgeul, dijkje en poelen zullen de gracht meer ruimte geven, ook voor een elzenbroekbos, dat op termijn zal zorgen voor buffering en infiltratie van hemelwater van de nieuwe woningen. In een volgende fase zal ook werk gemaakt worden van de doorwaadbaarheid en beleefbaarheid van het park. De uitgewerkte financiële tabel die de meerkosten van het hogere ambitieniveau onderbouwt, sterkt de jury in de keuze van project.'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.067726, 50.879872]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Watterbufferlandschap bovenloop Hollebeek te Geraardsbergen (Bufferende landschapsparken op de valleiflanken)</strong><p>Bij ‘Hollebeek Geraardsbergen’ grijpt men geplande rioleringswerken aan om een geïntegreerde aanpak met ontharding en groenblauwe inrichting gestalte te geven. De beoogde ingrepen zullen de sponswerking van de Hollebeekvallei bevorderen die enerzijds de snelle afvoer, welke overstromingsschade geeft in de afwaartse gebieden, reduceert en anderzijds de verdroging van de natuur- en landbouwgebieden wegwerkt. Ook dit project werd geprezen omwille van zijn geïntegreerde en complexe karakter.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.921285, 50.756721]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                "<strong>Huldenberg herbront (Herbronnen in Brabantse Walden)</strong><p>‘Huldenberg herbront’ is een hefboomproject voor de problematiek van bronnen waarvan het water niet gebruikt wordt en die rioleringen te veel belasten. De complexiteit van dit project is illustratief voor de verwachtingen op dat vlak in deze oproep. De jury vindt de hoge subsidievraag verantwoord op basis van de hoge ambities op vlak van ontharding en groenblauwe herinrichting en het feit dat de kwalitatieve uitvoering kan worden bewaakt dankzij de inzet van de procedure Open Oproep Vlaams Bouwmeester.</p>"
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.583245, 50.789218]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Bron Pier Slot	(Herbronnen in Brabantse Walden)</strong><p>‘Bron Pier Slot’ is een gelijkaardig project als het vorige waarvan een eerste fase wordt opgenomen in de Lokale Gebiedsdeal. Het project bevat een sterke en door de jury geapprecieerde component van hergebruik van het bronwater in een mix van privé- en publieke gebruikers.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.656420, 50.803142]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ter Lanen herbront in de Brabantse wouden (Herbronnen in Brabantse Walden)</strong><p>‘Ter Lanen herbront’ zet met zijn acties in op twee bron-strengen en op samenwerking, wat volgens de jury resulteert in een complex en geïntegreerd project met een hefboomfunctie voor de ruimere omgeving en de thematiek van bronnen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.600599, 50.770181]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                "<strong>Bronloop verbindt Neerijse	(Herbronnen in Brabantse Walden)</strong><p>‘Bronloop verbindt Neerijse’ is een waardevol project door zijn combinatie van de aanleg van een bronloop met verschillende ontmoetingsplekken en het gebruik van het bronwater binnen de bedrijvigheid van een brouwerij als pilootproject.</p>"
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.624308, 50.815277]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Waterskatepark sportsite te Liedekerke	(Op(en)ruimen van het Denderlandschap)</strong><p>De jury evalueert het project ‘Waterskatepark Sportsite’ te Liedekerke positief. De inzet van het skatepark als multifunctionele waterinfrastructuur waarbij een cascade wordt gecreëerd voor de opvang, vertraagde afvoer en -infiltratie van hemelwater, samen met de ambitie van waterhergebruik, vindt de jury innovatief en voorbeeldstellend voor de multifunctionele en waterbewuste inrichting van de publieke ruimte. Het ambitieniveau past bij de Sportsite als bestemming van bovenlokaal belang.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.078015, 50.865885]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Klimaatstraat Rerum Novarum te Aalst	(Op(en)ruimen van het Denderlandschap)</strong><p>De jury acht de ‘klimaatstraten Rerum Novarum’ te Aalst en ‘Kappellenweide’ te Roosdaal voldoende kwalitatief uitgewerkt met overtuigende ruimtelijke geïntegreerde ontwerpen, waarbij de kwaliteit en samenwerking met de rioolbeheerders en diverse ruimtegebruikers, als basis kunnen dienen voor het beoogde leer- en muliplicatoreffect.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.070019,50.928691]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Klimaatstraat Sportlaan te Liedekerke (Op(en)ruimen van het Denderlandschap)</strong><p>De actie ‘ontharding en inrichting van de Sportlaan tot klimaatstraat’ overtuigt de jury, in de eerste plaats omwille van zijn kwantitatieve onthardingsdoelstellingen en de reorganisatie van (trage) mobiliteit en parkeren met meer ruimte voor groenblauw als resultaat. De jury legde de voorwaarde van eventuele gedeeltelijke selectie van dit project voor aan Liedekerke.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.079809, 50.862998]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Klimaatstraat Kapelleweide te Roosdaal	(Op(en)ruimen van het Denderlandschap)</strong><p>De jury acht de ‘klimaatstraten Rerum Novarum’ te Aalst en ‘Kappellenweide’ te Roosdaal voldoende kwalitatief uitgewerkt met overtuigende ruimtelijke geïntegreerde ontwerpen, waarbij de kwaliteit en samenwerking met de rioolbeheerders en diverse ruimtegebruikers, als basis kunnen dienen voor het beoogde leer- en muliplicatoreffect.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.084117, 50.843472]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Roosterbeek Zonhoven: Openleggen Roosterbeek	(Lokale Gebiedsdeal Droogte Noord-Zuid Limburg)</strong><p>Bij het deelproject ‘Vallei Roosterbeek’ wordt de vallei van de Roosterbeek in het centrum van Zonhoven hersteld. Er wordt ruimte aan water gegeven zowel in het centrum als stroomopwaarts. De jury apprecieert de gecombineerde inzet op ontharding, buffering, infiltratie en groenblauwe dooradering. Een strakke vooropgestelde timing waarbij eind dit jaar een omgevingsvergunning zal worden aangevraagd, maakt dit een haalbaar project. Daarbij wordt de toegevoegde waarde van de Lokale gebiedsdeal (aan een project dat zich bevindt in de fase van vergunningsaanvraag) voldoende gemotiveerd met een aantal wijzigingen en toevoeging van hogere ambities t.o.v. het eerder opgemaakte projectvoorstel, waaronder de herinrichting van de Bookmolen als bronmaatregel en de samenwerkingsovereenkomst met de provincie in functie van extra focus op ecologie en natuurlijke groenblauwe inrichting. De jury onderstreept de relatie met een watergebonden inrichting van het stedelijk park als een belangrijk perspectief net als het omzetten van bestaande woonuitbreidingsgebieden die het park verder kunnen versterken. Hoewel dit omwille van de langere termijn buiten de gebiedsdeal valt, hoopt de jury dat dit project ook een hefboom zal zijn om deze ontwikkelingen maximaal in te zetten voor waterinfiltratie en verder meegenomen wordt in relatie tot het complex project Noord-Zuid Limburg.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.367072, 50.990771]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Groenstraatbeek/Roodebeek Houthalen-Helchteren: Herstel Groenstraatbeek (Lokale Gebiedsdeal Droogte Noord-Zuid Limburg)</strong><p>De jury beoordeelt het deelproject ‘Vallei Groenbeekstraat/Roodebeek’ te Houthalen-Helchteren als een goed voorbeeld van een geïntegreerd project, waarvan, zoals bij ‘vallei Roosterbeek’, de zichtbaarheid door de jury als meerwaarde wordt ingeschat om goede projecten ook te laten (be)leven als algemene publieke ruimtes. De acties gaan over het herinrichten van een bedrijventerrein zodat ruimte voor infiltratie en opvang ontstaat, het openleggen van de Groenstraatbeek en aanpassen van een bekken zodat ingrepen op het bedrijventerrein zo optimaal mogelijk het beeksysteem voeden en zorgen voor de verdere vernatting van Brelaarheide. De aanpak van de Koolmijnlaan samen met de ‘mijnpompen’ vindt de jury zeer positief. De landschappelijke heraanleg van de Koolmijnlaan wordt aangegrepen om de problematiek van de mijnpompen aan te pakken. Hiermee wordt expliciet ingezet op de droogteproblematiek van natuurgebied Brelaarheide.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.389758, 51.029478]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Vallei Dommel Peer: Herinrichting Bomerstraat (Lokale Gebiedsdeal Droogte Noord-Zuid Limburg)</strong><p>Bij ‘Vallei Dommel Peer’ wordt ingezet op ontharding, vergroening, herinrichting van de oevers, infiltratie, hergebruik en het verbinden van het centrum met de Dommelvallei. De herinrichting van de Bomerstraat wordt aangegrepen als kans om deze verbindingsweg naar het Dommelpark maximaal te vergroenen. Deze actie kan een hefboom vormen om andere straten op een gelijkaardige manier in te richten. Het project omvat ook de herinrichting van de Zuidervest en de inrichting van een park.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.449747,51.131645]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>De plas van bever Bas (Lokale Gebiedsdeal Droogte Kleine Nete)</strong><p>Het project ‘De plas van bever Bas’ te Grobbendonk speelt goed in op de eigenheid van deze oproep. De complexiteit en geïntegreerde aanpak is vooral terug te vinden in de combinatie van vele acties (infiltratie, recreatie, hergebruik, educatie, herstel) en watergerelateerde maatregelen in een intergenerationeel park met waterbeleeftuin. De aanwezige hydrologische strategie en redenering opgebouwd vanuit een hernieuwd of hersteld watersysteem (grachten, vijver, wadi, afkoppelen hemelwater daken, …) overtuigt de jury voldoende dat dit meer is dan een dorpspark-heraanleg, namelijk ook een droogteproject.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.736466, 51.190782]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ontharding Le Paige (Lokale Gebiedsdeal Droogte Kleine Nete)</strong><p>Het project ‘Ontharding Le Paige’ te Herentals betreft een eerste fase in een grotere totaalvisie voor kernversterking en complexe poortontwikkeling tot de Kleine Nete (erfgoed, recreatie, biodiversiteit). De jury ziet een belangrijke sleutel in de volgende fase van het project, met een totaal verwachte netto-ontharding van +/- 3540 m², en ziet de gebiedsdeal als hefboom voor extra aandacht voor ontharding en waterinfiltratie in een sterk verstedelijkt deel van de vallei van de Kleine Nete en toekomstige onthardingsprojecten hogerop in het stroomgebied.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.837419, 51.186571]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ontharding hoeve Zegge	(Lokale Gebiedsdeal Droogte Kleine Nete)</strong><p>Het project ‘Ontharding hoeve Zegge’ te Geel overtuigt de jury gezien de voorbeeldwaarde van ontharding en herinrichting van landbouwgebied rond de Zegge naar moeras met duidelijk hydrologische functie, en daar waar het bijzonder zinvol is. De jury erkent een mogelijk hoge precedentwaarde, maar betreurt dat dit project, gezien het belang ervan, uiteindelijk via deze oproep moet worden goedgekeurd en nog geen plek heeft gevonden in andere Blue Deal trajecten, zoals de Blue Deal grondenbank.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [4.936399, 51.201701]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Kortrijk: Van Kava tot monding	(Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>In het deelproject ‘Van Kava tot monding’ stelt initiatiefnemer Kortrijk diverse acties voor. Grondverwerving i.f.v. uitbreiding en opwaardering van natte natuur, ontharding en herinrichting van de beekvallei worden gecombineerd met recreatie en educatie. De jury waardeert dat diverse ingrepen tot een geïntegreerd verhaal worden samengebracht. De jury ziet het wel als een belangrijke voorwaarde dat de ingrepen inzake recreatie en educatie pas worden uitgevoerd als de ontharding en inrichtingswerken zijn voltooid. Voor het uitkijkpunt moet maximaal worden ingespeeld op de mogelijkheden voor educatie omtrent het watersysteem en klimaatverandering.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.231808,50.823014]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Menen: Boulevard Leiewerken (Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>‘Boulevard Leiewerken’ te Menen getuigt van een ambitieuze ontharding en stelt watertechnische maatregelen voor zoals infiltratie, berging en hergebruik. Hemelwater wordt opgevangen voor infiltratie ter plekke en/of ingezet voor hergebruik, waarbij de ambities voor een kwalitatieve inrichting van de publieke ruimte duidelijk het regulier beleid overstijgen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.130727, 50.792154]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Zulte: Boelakepont	(Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>Bij ‘Boulakepont’ te Zulte wordt het projectgebied ingezet als spons om hemelwater te capteren om het daarna beschikbaar te stellen aan de omgeving. Technische oplossingen voor vertraagde afvoer worden gekoppeld aan ruimtelijke invullingen die plaats bieden voor natuur, recreatie en klimaatbestendige landschapsontwikkeling. Het project toont op kwalitatieve wijze hoe een rommelige rand tussen bebouwd weefsel en Leievallei kan worden getransformeerd tot verbindend landschap. Hierbij dient voldoende aandacht te gaan naar de (gewestplan) bestemmingen.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.438131, 50.920911]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Wielsbeke: Speelbos Sint-Baafs-Vijve	(Lokale Gebiedsdeal Droogte Gebiedscoalitie Leievallei)</strong><p>Met het deelproject ‘Speelbos Sint-Baafs-Vijve’ wil de gemeente Wielsbeke een multifunctioneel speelbos ontwikkelen waarbij het watersysteem als uitgangspunt is genomen. Er wordt ruimte voor water, sport, spel, een productief landschap en natuurontwikkeling voorzien. De jury vindt het een zeer interessant project om het bergen en infiltreren van water hand in hand te laten gaan met het ontwikkelen van een kwaliteitsvol natuur- en speellandschap. Bijkomend pluspunt is het afleiden van hemelwater vanop het naastliggend bedrijventerrein naar plaatsen waar er een vraag is naar water.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [3.398612, 50.908016]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Brongebied van de Bosbeek - As	(Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>In ‘Brongebied Bosbeek’ te As zal men een stort, na ambtshalve sanering door OVAM, inrichten als waterretentiezone, maatregelen nemen voor het vertraagd afvoeren van hemelwater in het gebied ten noorden van de Oude Beek, en het Geytenbroek vernatten en voorzien van een knuppelpad. Voor een vernatting van de Bosbeekvallei wordt ingezet op twee gebieden; de omgeving van de Schansdijkstraat en het Geytenbroek. De koppeling van de unieke historische watersituatie die is ontstaan door mijnverzakkingen aan een vernattingsambitie van dit gebied maakt dit een zeer interessant en ook innovatief project dat een voorbeeldwaarde zal hebben voor gelijkaardige gebieden.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.583605, 51.013910]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Bovenloop van de Kleine Beek - Opglabbeek (Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>Met de uitbouw van een entree d.m.v. het wegnemen van bebouwing vanuit het dorp (Opglabbeek) tot de vallei van de Kleine Beek, het ontharden van een straat en het aanleggen van een doorstroommoeras, zal het project ‘Bovenloop Kleine Beek’ een aantal cruciale elementen realiseren van een nog groter en complexer centrumproject. Dit project zal dan ook zeker een hefboom vormen voor een verdere transformatie van het centrum. Via de Kleine Beek zal vanuit Opglabbeek een verbinding tot de Bosbeek worden gerealiseerd.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.591293, 51.043556]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Dorpskern Opoeteren (Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>‘Dorpskern Opoeteren’ maakt werk van een strategische en structurele ontharding van het centrum van Opoeteren, op de strategische plek waar dorpskern en beekvallei elkaar raken. Zo tracht men de natuurlijke valleiflank te herstellen. De kern van Opoeteren maakt hiermee ook terug een verbinding met haar ontstaansgeschiedenis die is toe te wijzen aan de aanwezigheid van de Bosbeek. De jury keurt dit project goed in de eerste plaats omwille van de hoge ambitie voor ontharding en het herstel van de natuurlijke valleiflank op deze centraal gelegen locatie: in totaal wordt beoogd om ongeveer 5.500 m² verharding uit te breken waarvan 4.000 m² effectief wordt onverhard.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.655009, 51.068773]
                        }
                    },
                  {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Landschappelijke verbinding Bosbeek-Oudsberg in Opoeteren (Lokale Gebiedsdeal Droogte Stroomdal Bosbeek)</strong><p>Met ‘Verbinding Bosbeek – Oudsberg’ zal men in Opoeteren een gemeenteweg ontharden en downgraden van een weg voor doorgaand verkeer tot een fietspad, en een zone realiseren voor de opvang van afstromend hemelwater langs de Kasteelstraat. Het project situeert zich op een strategische plek. Drie landschappen komen hier samen: een duinenlandschap vanuit het noorden, een bebost gebied vanuit het nationaal park en de oost-west georiënteerde Bosbeekvallei. Wat betreft de aanleg van een waterretentiezone gaat het Agentschap Natuur en Bos principieel akkoord. De precieze uitwerking ervan (locatie, dimensies, …) dient afgestemd met de terreinbeheerder.</p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [5.640529, 51.056932]
                        }
                    }
                ]
            }
        });
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-opacity': 0,
                'circle-stroke-width': 0,
                'circle-stroke-color': '#4f3d5a'
            }
        });

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    });

map.addControl(new mapboxgl.FullscreenControl());