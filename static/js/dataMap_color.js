var countries = {'GRL': {'gross domestic product, current prices': 'N/A', 'name': 'united states', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': 'N/A'}, 'USA': {'gross domestic product, current prices': '18,036,648', 'name': 'united states', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '18,036,648', 'region': 'North America', 'income': 'High income', 'oils': 'Other'}, 'AFG': {'gross domestic product, current prices': '20.57', 'name': 'afghanistan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '67.462', 'region': 'South Asia', 'income': 'Low income', 'oils': 'Other'}, 'ALB': {'gross domestic product, current prices': '12.294', 'name': 'albania', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '36.198', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Other'}, 'DZA': {'gross domestic product, current prices': '173.947', 'name': 'algeria', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '634.746', 'region': 'Middle East & North Africa', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'AGO': {'gross domestic product, current prices': '122.365', 'name': 'angola', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '193.935', 'region': 'Sub-Saharan Africa', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'ARG': {'gross domestic product, current prices': '628.935', 'name': 'argentina', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '912.816', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'ARM': {'gross domestic product, current prices': '10.741', 'name': 'armenia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '27.116', 'region': 'Europe & Central Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'AUS': {'gross domestic product, current prices': '1,359.72', 'name': 'australia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,251.42', 'region': 'East Asia & Pacific', 'income': 'High income', 'oils': 'Other'}, 'AUT': {'gross domestic product, current prices': '383.509', 'name': 'austria', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '432.424', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'AZE': {'gross domestic product, current prices': '38.583', 'name': 'azerbaijan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '167.431', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'BHS': {'gross domestic product, current prices': '9.172', 'name': 'the bahamas', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '9.374'}, 'BGD': {'gross domestic product, current prices': '248.853', 'name': 'bangladesh', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '686.598', 'region': 'South Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'BLR': {'gross domestic product, current prices': '54.689', 'name': 'belarus', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '173.405', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Other'}, 'BEL': {'gross domestic product, current prices': '462.715', 'name': 'belgium', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '529.289', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'BLZ': {'gross domestic product, current prices': '1.829', 'name': 'belize', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '3.252', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'BEN': {'gross domestic product, current prices': '8.792', 'name': 'benin', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '25.407', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'BTN': {'gross domestic product, current prices': '2.308', 'name': 'bhutan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '7.045', 'region': 'South Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'BOL': {'gross domestic product, current prices': '39.267', 'name': 'bolivia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '83.608', 'region': 'Latin America & Caribbean', 'income': 'Lower middle income', 'oils': 'Other'}, 'BIH': {'gross domestic product, current prices': '16.78', 'name': 'bosnia and herzegovina', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '44.462', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Other'}, 'BWA': {'gross domestic product, current prices': '15.564', 'name': 'botswana', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '39.054', 'region': 'Sub-Saharan Africa', 'income': 'Upper middle income', 'oils': 'Other'}, 'BRA': {'gross domestic product, current prices': '2,140.94', 'name': 'brazil', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '3,216.03', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'BGR': {'gross domestic product, current prices': '52.291', 'name': 'bulgaria', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '152.079', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Other'}, 'BFA': {'gross domestic product, current prices': '12.258', 'name': 'burkina faso', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '35.598', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'BDI': {'gross domestic product, current prices': '3.384', 'name': 'burundi', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '8.024', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'KHM': {'gross domestic product, current prices': '20.953', 'name': 'cambodia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '64.405', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'CMR': {'gross domestic product, current prices': '29.547', 'name': 'cameroon', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '81.535', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'CAN': {'gross domestic product, current prices': '1,600.27', 'name': 'canada', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,752.91', 'region': 'North America', 'income': 'High income', 'oils': 'Other'}, 'CAF': {'gross domestic product, current prices': '1.992', 'name': 'central african republic', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '3.411', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'TCD': {'gross domestic product, current prices': '9.636', 'name': 'chad', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '29.73', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Oil Producing'}, 'CHL': {'gross domestic product, current prices': '251.22', 'name': 'chile', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '455.941', 'region': 'Latin America & Caribbean', 'income': 'High income', 'oils': 'Other'}, 'CHN': {'gross domestic product, current prices': '11,795.30', 'name': 'china', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '23,194.41', 'region': 'East Asia & Pacific', 'income': 'Upper middle income', 'oils': 'Other'}, 'COL': {'gross domestic product, current prices': '306.439', 'name': 'colombia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '720.151', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'COD': {'gross domestic product, current prices': '41.098', 'name': 'democratic republic of the congo', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '68.331'}, 'CRI': {'gross domestic product, current prices': '59.796', 'name': 'costa rica', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '85.781', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'HRV': {'gross domestic product, current prices': '50.084', 'name': 'croatia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '100.006', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'CYP': {'gross domestic product, current prices': '19.648', 'name': 'cyprus', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '31.093', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'CZE': {'gross domestic product, current prices': '196.068', 'name': 'czech republic', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '368.659', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'DNK': {'gross domestic product, current prices': '304.216', 'name': 'denmark', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '284.04', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'DJI': {'gross domestic product, current prices': '2.088', 'name': 'djibouti', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '3.658', 'region': 'Middle East & North Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'DOM': {'gross domestic product, current prices': '76.85', 'name': 'dominican republic', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '174.18', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'ECU': {'gross domestic product, current prices': '97.362', 'name': 'ecuador', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '184.629', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'EGY': {'gross domestic product, current prices': 'n/a', 'name': 'egypt', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,197.97', 'region': 'Middle East & North Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'SLV': {'gross domestic product, current prices': '27.548', 'name': 'el salvador', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '57.285', 'region': 'Latin America & Caribbean', 'income': 'Lower middle income', 'oils': 'Other'}, 'GNQ': {'gross domestic product, current prices': '11.686', 'name': 'equatorial guinea', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '30.807', 'region': 'Sub-Saharan Africa', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'ERI': {'gross domestic product, current prices': '6.051', 'name': 'eritrea', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '9.678', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'EST': {'gross domestic product, current prices': '23.422', 'name': 'estonia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '40.275', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'ETH': {'gross domestic product, current prices': '78.384', 'name': 'ethiopia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '194.98', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'FJI': {'gross domestic product, current prices': '4.869', 'name': 'fiji', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '8.798', 'region': 'East Asia & Pacific', 'income': 'Upper middle income', 'oils': 'Other'}, 'FIN': {'gross domestic product, current prices': '234.524', 'name': 'finland', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '239.662', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'FRA': {'gross domestic product, current prices': '2,420.44', 'name': 'france', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '2,833.06', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'GAB': {'gross domestic product, current prices': '14.208', 'name': 'gabon', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '36.999', 'region': 'Sub-Saharan Africa', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'GEO': {'gross domestic product, current prices': '13.723', 'name': 'georgia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '39.318', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Other'}, 'DEU': {'gross domestic product, current prices': '3,423.29', 'name': 'germany', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '4,134.67', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'GHA': {'gross domestic product, current prices': '42.753', 'name': 'ghana', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '131.498', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'GRC': {'gross domestic product, current prices': '193.1', 'name': 'greece', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '302.15', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'GTM': {'gross domestic product, current prices': '70.943', 'name': 'guatemala', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '138.987', 'region': 'Latin America & Caribbean', 'income': 'Lower middle income', 'oils': 'Other'}, 'GIN': {'gross domestic product, current prices': '6.936', 'name': 'guinea', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '17.056', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'GUY': {'gross domestic product, current prices': '3.591', 'name': 'guyana', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '6.398', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'HTI': {'gross domestic product, current prices': '7.897', 'name': 'haiti', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '19.979', 'region': 'Latin America & Caribbean', 'income': 'Low income', 'oils': 'Other'}, 'HND': {'gross domestic product, current prices': '21.79', 'name': 'honduras', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '45.628', 'region': 'Latin America & Caribbean', 'income': 'Lower middle income', 'oils': 'Other'}, 'HUN': {'gross domestic product, current prices': '125.297', 'name': 'hungary', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '284.266', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'ISL': {'gross domestic product, current prices': '22.97', 'name': 'iceland', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '17.846', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'IND': {'gross domestic product, current prices': '2,454.46', 'name': 'india', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '9,489.30', 'region': 'South Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'IDN': {'gross domestic product, current prices': '1,020.52', 'name': 'indonesia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '3,257.12', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'IRQ': {'gross domestic product, current prices': '189.432', 'name': 'iraq', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '641.005', 'region': 'Middle East & North Africa', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'IRL': {'gross domestic product, current prices': '294.193', 'name': 'ireland', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '343.682', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'ISR': {'gross domestic product, current prices': '339.99', 'name': 'israel', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '316.12', 'region': 'Middle East & North Africa', 'income': 'High income', 'oils': 'Other'}, 'ITA': {'gross domestic product, current prices': '1,807.43', 'name': 'italy', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '2,303.11', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'JAM': {'gross domestic product, current prices': '14.272', 'name': 'jamaica', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '26.474', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'JPN': {'gross domestic product, current prices': '4,841.22', 'name': 'japan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '5,420.23', 'region': 'East Asia & Pacific', 'income': 'High income', 'oils': 'Other'}, 'JOR': {'gross domestic product, current prices': '40.506', 'name': 'jordan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '89.555', 'region': 'Middle East & North Africa', 'income': 'Upper middle income', 'oils': 'Other'}, 'KAZ': {'gross domestic product, current prices': '157.878', 'name': 'kazakhstan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '472.563', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'KEN': {'gross domestic product, current prices': '75.099', 'name': 'kenya', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '164.34', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Other'}, '-99': {'gross domestic product, current prices': '6.809', 'name': 'kosovo', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '19.509'}, 'KWT': {'gross domestic product, current prices': '126.971', 'name': 'kuwait', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '309.64', 'region': 'Middle East & North Africa', 'income': 'High income', 'oils': 'Oil Producing'}, 'LVA': {'gross domestic product, current prices': '27.795', 'name': 'latvia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '53.268', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'LBN': {'gross domestic product, current prices': '53.915', 'name': 'lebanon', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '88.786', 'region': 'Middle East & North Africa', 'income': 'Upper middle income', 'oils': 'Other'}, 'LSO': {'gross domestic product, current prices': '2.439', 'name': 'lesotho', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '7.287', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'LBR': {'gross domestic product, current prices': '2.215', 'name': 'liberia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '3.96', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'LBY': {'gross domestic product, current prices': '54.411', 'name': 'libya', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '87.067', 'region': 'Middle East & North Africa', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'LTU': {'gross domestic product, current prices': '42.826', 'name': 'lithuania', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '90.387', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'LUX': {'gross domestic product, current prices': '59.997', 'name': 'luxembourg', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '63.549', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'MDG': {'gross domestic product, current prices': '10.372', 'name': 'madagascar', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '40.055', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'MWI': {'gross domestic product, current prices': '6.182', 'name': 'malawi', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '22.577', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'MYS': {'gross domestic product, current prices': '309.86', 'name': 'malaysia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '922.057', 'region': 'East Asia & Pacific', 'income': 'Upper middle income', 'oils': 'Other'}, 'MLI': {'gross domestic product, current prices': '14.344', 'name': 'mali', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '40.974', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'MRT': {'gross domestic product, current prices': '5.063', 'name': 'mauritania', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '17.421', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'MEX': {'gross domestic product, current prices': '987.303', 'name': 'mexico', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '2,406.20', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'MDA': {'gross domestic product, current prices': '7.409', 'name': 'moldova', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '20.207', 'region': 'Europe & Central Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'MNG': {'gross domestic product, current prices': '10.271', 'name': 'mongolia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '37.731', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'MNE': {'gross domestic product, current prices': '4.185', 'name': 'montenegro', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '10.934', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Other'}, 'MAR': {'gross domestic product, current prices': '105.623', 'name': 'morocco', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '300.556', 'region': 'Middle East & North Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'MOZ': {'gross domestic product, current prices': '11.17', 'name': 'mozambique', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '37.321', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'MMR': {'gross domestic product, current prices': '72.368', 'name': 'myanmar', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '334.856', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'NAM': {'gross domestic product, current prices': '11.765', 'name': 'namibia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '27.451', 'region': 'Sub-Saharan Africa', 'income': 'Upper middle income', 'oils': 'Other'}, 'NPL': {'gross domestic product, current prices': '23.316', 'name': 'nepal', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '77.147', 'region': 'South Asia', 'income': 'Low income', 'oils': 'Other'}, 'NLD': {'gross domestic product, current prices': '762.694', 'name': 'netherlands', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '907.619', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'NZL': {'gross domestic product, current prices': '198.043', 'name': 'new zealand', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '186.476', 'region': 'East Asia & Pacific', 'income': 'High income', 'oils': 'Other'}, 'NIC': {'gross domestic product, current prices': '13.748', 'name': 'nicaragua', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '35.835', 'region': 'Latin America & Caribbean', 'income': 'Lower middle income', 'oils': 'Other'}, 'NER': {'gross domestic product, current prices': '7.674', 'name': 'niger', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '21.655', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'NGA': {'gross domestic product, current prices': '400.621', 'name': 'nigeria', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,124.63', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Oil Producing'}, 'NOR': {'gross domestic product, current prices': '391.959', 'name': 'norway', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '377.1', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'OMN': {'gross domestic product, current prices': '71.325', 'name': 'oman', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '189.582', 'region': 'Middle East & North Africa', 'income': 'High income', 'oils': 'Oil Producing'}, 'PAK': {'gross domestic product, current prices': 'n/a', 'name': 'pakistan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,060.57', 'region': 'South Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'PAN': {'gross domestic product, current prices': '59.486', 'name': 'panama', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '100.512', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'PNG': {'gross domestic product, current prices': '21.189', 'name': 'papua new guinea', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '29.481', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'PRY': {'gross domestic product, current prices': '28.743', 'name': 'paraguay', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '68.005', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'PER': {'gross domestic product, current prices': '207.072', 'name': 'peru', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '429.711', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'PHL': {'gross domestic product, current prices': '329.716', 'name': 'philippines', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '878.98', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'POL': {'gross domestic product, current prices': '482.92', 'name': 'poland', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,114.11', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'PRT': {'gross domestic product, current prices': '202.77', 'name': 'portugal', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '310.651', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'PRI': {'gross domestic product, current prices': '99.727', 'name': 'puerto rico', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '129.848', 'region': 'Latin America & Caribbean', 'income': 'High income', 'oils': 'Other'}, 'QAT': {'gross domestic product, current prices': '173.649', 'name': 'qatar', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '347.887', 'region': 'Middle East & North Africa', 'income': 'High income', 'oils': 'Oil Producing'}, 'ROU': {'gross domestic product, current prices': '189.79', 'name': 'romania', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '470.312'}, 'RUS': {'gross domestic product, current prices': '1,560.71', 'name': 'russia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '3,938.00', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'RWA': {'gross domestic product, current prices': '8.918', 'name': 'rwanda', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '24.717', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'SAU': {'gross domestic product, current prices': '707.379', 'name': 'saudi arabia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,796.21', 'region': 'Middle East & North Africa', 'income': 'High income', 'oils': 'Oil Producing'}, 'SEN': {'gross domestic product, current prices': '15.431', 'name': 'senegal', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '43.326', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'SLE': {'gross domestic product, current prices': '4.088', 'name': 'sierra leone', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '11.551', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'SVN': {'gross domestic product, current prices': '43.503', 'name': 'slovenia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '69.358', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'SLB': {'gross domestic product, current prices': '1.245', 'name': 'solomon islands', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1.247', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'ZAF': {'gross domestic product, current prices': '317.568', 'name': 'south africa', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '761.926', 'region': 'Sub-Saharan Africa', 'income': 'Upper middle income', 'oils': 'Other'}, 'SSD': {'gross domestic product, current prices': '4.812', 'name': 'south sudan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '20.423', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'ESP': {'gross domestic product, current prices': '1,232.44', 'name': 'spain', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,768.82', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'LKA': {'gross domestic product, current prices': '84.023', 'name': 'sri lanka', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '278.415', 'region': 'South Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'SDN': {'gross domestic product, current prices': '115.874', 'name': 'sudan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '186.715', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Oil Producing'}, 'SUR': {'gross domestic product, current prices': '3.641', 'name': 'suriname', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '7.961', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Other'}, 'SWZ': {'gross domestic product, current prices': '3.938', 'name': 'swaziland', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '11.352', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'SWE': {'gross domestic product, current prices': '507.046', 'name': 'sweden', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '522.849', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'CHE': {'gross domestic product, current prices': '659.368', 'name': 'switzerland', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '514.162', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'SYR': {'gross domestic product, current prices': 'n/a', 'name': 'syria', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': 'n/a', 'region': 'Middle East & North Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'TJK': {'gross domestic product, current prices': '7.242', 'name': 'tajikistan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '27.802', 'region': 'Europe & Central Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'THA': {'gross domestic product, current prices': '432.898', 'name': 'thailand', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '1,226.41', 'region': 'East Asia & Pacific', 'income': 'Upper middle income', 'oils': 'Other'}, 'TGO': {'gross domestic product, current prices': '4.554', 'name': 'togo', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '12.494', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'TTO': {'gross domestic product, current prices': '21.748', 'name': 'trinidad and tobago', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '44.654', 'region': 'Latin America & Caribbean', 'income': 'High income', 'oils': 'Oil Producing'}, 'TUN': {'gross domestic product, current prices': '40.289', 'name': 'tunisia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '136.797', 'region': 'Middle East & North Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'TUR': {'gross domestic product, current prices': '793.698', 'name': 'turkey', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '2,082.08', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Other'}, 'TKM': {'gross domestic product, current prices': '42.355', 'name': 'turkmenistan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '103.987', 'region': 'Europe & Central Asia', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'UGA': {'gross domestic product, current prices': '27.174', 'name': 'uganda', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '91.212', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}, 'UKR': {'gross domestic product, current prices': '95.934', 'name': 'ukraine', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '368.047', 'region': 'Europe & Central Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'ARE': {'gross domestic product, current prices': '407.21', 'name': 'united arab emirates', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '693.765', 'region': 'Middle East & North Africa', 'income': 'High income', 'oils': 'Oil Producing'}, 'GBR': {'gross domestic product, current prices': '2,496.76', 'name': 'united kingdom', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '2,905.39', 'region': 'Europe & Central Asia', 'income': 'High income', 'oils': 'Other'}, 'URY': {'gross domestic product, current prices': '58.123', 'name': 'uruguay', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '77.8', 'region': 'Latin America & Caribbean', 'income': 'High income', 'oils': 'Other'}, 'UZB': {'gross domestic product, current prices': '68.324', 'name': 'uzbekistan', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '222.792', 'region': 'Europe & Central Asia', 'income': 'Lower middle income', 'oils': 'Other'}, 'VUT': {'gross domestic product, current prices': '0.829', 'name': 'vanuatu', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '0.772', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'VEN': {'gross domestic product, current prices': '251.589', 'name': 'venezuela', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '404.109', 'region': 'Latin America & Caribbean', 'income': 'Upper middle income', 'oils': 'Oil Producing'}, 'VNM': {'gross domestic product, current prices': '215.829', 'name': 'vietnam', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '648.243', 'region': 'East Asia & Pacific', 'income': 'Lower middle income', 'oils': 'Other'}, 'YEM': {'gross domestic product, current prices': '27.189', 'name': 'yemen', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '74.25', 'region': 'Middle East & North Africa', 'income': 'Lower middle income', 'oils': 'Oil Producing'}, 'ZMB': {'gross domestic product, current prices': '23.137', 'name': 'zambia', 'gross domestic product based on purchasing-power-parity (ppp) valuation of country gdp': '68.648', 'region': 'Sub-Saharan Africa', 'income': 'Lower middle income', 'oils': 'Other'}, 'ZWE': {'gross domestic product, current prices': '15.285', 'name': 'zimbabwe', 'region': 'Sub-Saharan Africa', 'income': 'Low income', 'oils': 'Other'}};
var oldId = 'USA';
var newId;
$('#countryName-container').bind("DOMSubtreeModified",function(){
    
    var newMap ={};
    newMap[oldId]= '#F5F5F5';
    newMap[newId]= 'brown';
    console.log(newMap);
    map.updateChoropleth(newMap, {reset: false});
    oldId = $(this).data('ISO3');
    console.log(oldId);
})    
$('#countryName-container').change(function(){
    var newMap ={};
    newMap[oldId]= '#F5F5F5';
    newMap[newId]= 'brown';
    map.updateChoropleth(newMap, {reset: false});
    oldId = $(this).data('ISO3');
    alert(oldId);
})
/*
function update_highlight(map, old , newId){
    var oldObj={};oldObj[old]='#F5F5F5';
    var newObj={};newObj[newId]='brown';
    map.updateChoropleth(oldObj, {reset: true});   
    map.updateChoropleth(newObj, {reset: true});   
}
*/
function fis2017(map) {
    $('#map_legend').show();
    /*
    {'BEL': 'Tax policy Adjustment',
     'GRC': 'Fiscal Risk',
     'ISR': 'Fiscal Consolidation',
     'SVK': 'Fiscal Consolidation',
     'TUR': 'Fiscal Risk'}
     
     Expansionary Fiscal Pilocy         #7E57C2
     Fiscal Consolidation               #F39C12
     Fiscal Risk  :                     #E74C3C
     Medium Term Fiscal Adjustment      #2980B9
     Tax policy Adjustment  :           #45B39D
    */
    map.updateChoropleth({BEL: '#45B39D' , GRC: '#E74C3C', ISR: '#F39C12', SVK: '#F39C12', TUR : '#E74C3C'}, {reset: true});   

}
function fis2016(map) {
    $('#map_legend').show();
     /*
    {'AGO': 'Fiscal Consolidation',
 'ALB': 'Tax policy Adjustment',
 'ARG': 'Fiscal Consolidation',
 'AUT': 'Fiscal Consolidation',
 'AZE': 'Expansionary Fiscal Pilocy',
 'BFA': 'Expansionary Fiscal Pilocy',
 'BLR': 'Fiscal Consolidation',
 'BOL': 'Fiscal Consolidation',
 'BRA': 'Fiscal Consolidation',
 'BTN': 'Medium Term Fiscal Adjustment',
 'CAF': 'Expansionary Fiscal Pilocy',
 'CAN': 'Tax policy Adjustment',
 'CPV': 'Fiscal Risk',
 'CRI': 'Fiscal Consolidation',
 'CZE': 'Fiscal Consolidation',
 'DEU': 'Expansionary Fiscal Pilocy',
 'DJI': 'Fiscal Risk',
 'DMA': 'Fiscal Consolidation',
 'DZA': 'Expansionary Fiscal Pilocy',
 'EST': 'Fiscal Consolidation',
 'ETH': 'Fiscal Risk',
 'FIN': 'Tax policy Adjustment',
 'FRA': 'Fiscal Consolidation',
 'GBR': 'Tax policy Adjustment',
 'GNQ': 'Expansionary Fiscal Pilocy',
 'GRD': 'Fiscal Consolidation',
 'GUY': 'Expansionary Fiscal Pilocy',
 'HND': 'Expansionary Fiscal Pilocy',
 'HRV': 'Fiscal Consolidation',
 'HUN': 'Fiscal Consolidation',
 'KIR': 'Expansionary Fiscal Pilocy',
 'LKA': 'Tax policy Adjustment',
 'LUX': 'Fiscal Consolidation',
 'MEX': 'Fiscal Consolidation',
 'MHL': 'Tax policy Adjustment',
 'MLT': 'Fiscal Consolidation',
 'NAM': 'Fiscal Consolidation',
 'NER': 'Fiscal Consolidation',
 'NOR': 'Medium Term Fiscal Adjustment',
 'PAN': 'Medium Term Fiscal Adjustment',
 'PER': 'Expansionary Fiscal Pilocy',
 'PNG': 'Tax policy Adjustment',
 'POL': 'Fiscal Consolidation',
 'PRY': 'Expansionary Fiscal Pilocy',
 'ROM': 'Fiscal Consolidation',
 'SDN': 'Tax policy Adjustment',
 'SLV': 'Tax policy Adjustment',
 'SMR': 'Fiscal Consolidation',
 'SSD': 'Fiscal Consolidation',
 'SVN': 'Fiscal Consolidation',
 'SWE': 'Fiscal Consolidation',
 'TUR': 'Medium Term Fiscal Adjustment',
 'TZA': 'Expansionary Fiscal Pilocy',
 'URY': 'Tax policy Adjustment',
 'VNM': 'Tax policy Adjustment',
 'VUT': 'Fiscal Consolidation',
 'ZAF': 'Fiscal Consolidation',
 'ZWE': 'Fiscal Risk'}
     
     Expansionary Fiscal Pilocy         #7E57C2
     Fiscal Consolidation               #F39C12
     Fiscal Risk  :                     #E74C3C
     Medium Term Fiscal Adjustment      #2980B9
     Tax policy Adjustment  :           #45B39D
    */
    map.updateChoropleth({DZA: '#7E57C2', AGO: '#F39C12',GBR: '#45B39D', GNQ: '#7E57C2',HND: '#7E57C2',DMA: '#F39C12',LUX: '#F39C12',SWE: '#F39C12',FRA: '#F39C12',PER: '#7E57C2',NAM: '#F39C12',VUT: '#F39C12',BRA: '#F39C12',BOL: '#F39C12',CAN: '#45B39D',GUY: '#7E57C2',CRI: '#F39C12',NER: '#F39C12',ETH: '#E74C3C',CPV: '#E74C3C',ROM: '#F39C12',HUN: '#F39C12',CAF: '#7E57C2',TZA: '#7E57C2',POL: '#F39C12',PAN: '#2980B9',PRY: '#7E57C2',DEU: '#7E57C2',BFA: '#7E57C2',EST: '#F39C12',SLV: '#45B39D',HRV: '#F39C12',AZE: '#7E57C2',LKA: '#45B39D',GRD: '#F39C12',VNM: '#45B39D',SMR: '#F39C12',AUT: '#F39C12',MLT: '#F39C12',DJI: '#E74C3C',BLR: '#F39C12',FIN: '#45B39D',URY: '#45B39D',ZWE: '#E74C3C',MHL: '#45B39D',KIR: '#7E57C2',TUR: '#2980B9',ALB: '#45B39D',ZAF: '#F39C12',NOR: '#2980B9',ARG: '#F39C12',SVN: '#F39C12',SSD: '#F39C12',SDN: '#45B39D',BTN: '#2980B9',MEX: '#F39C12',PNG: '#45B39D',CZE: '#F39C12'}, {reset: true});   
  

}
function fis2015(map) {
    $('#map_legend').show();
    /*
   {'AFG': 'Fiscal Consolidation',
 'BEL': 'Fiscal Consolidation',
 'BGD': 'Expansionary Fiscal Pilocy',
 'BGR': 'Fiscal Consolidation',
 'BIH': 'Tax policy Adjustment',
 'BOL': 'Fiscal Consolidation',
 'BWA': 'Expansionary Fiscal Pilocy',
 'CHE': 'Medium Term Fiscal Adjustment',
 'CMR': 'Expansionary Fiscal Pilocy',
 'COL': 'Tax policy Adjustment',
 'CZE': 'Medium Term Fiscal Adjustment',
 'DEU': 'Expansionary Fiscal Pilocy',
 'DJI': 'Tax policy Adjustment',
 'DOM': 'Tax policy Adjustment',
 'EST': 'Medium Term Fiscal Adjustment',
 'FIN': 'Tax policy Adjustment',
 'FJI': 'Expansionary Fiscal Pilocy',
 'FRA': 'Tax policy Adjustment',
 'GBR': 'Tax policy Adjustment',
 'GNQ': 'Expansionary Fiscal Pilocy',
 'HRV': 'Fiscal Consolidation',
 'HUN': 'Fiscal Consolidation',
 'IND': 'Tax policy Adjustment',
 'IRL': 'Fiscal Consolidation',
 'ISR': 'Fiscal Consolidation',
 'ITA': 'Fiscal Risk',
 'JPN': 'Tax policy Adjustment',
 'KAZ': 'Fiscal Consolidation',
 'KSV': 'Medium Term Fiscal Adjustment',
 'KWT': 'Fiscal Consolidation',
 'LUX': 'Fiscal Consolidation',
 'LVA': 'Tax policy Adjustment',
 'MEX': 'Fiscal Consolidation',
 'MNE': 'Fiscal Consolidation',
 'MUS': 'Fiscal Consolidation',
 'NIC': 'Fiscal Consolidation',
 'NLD': 'Fiscal Consolidation',
 'NOR': 'Medium Term Fiscal Adjustment',
 'NPL': 'Expansionary Fiscal Pilocy',
 'PAN': 'Fiscal Consolidation',
 'PHL': 'Fiscal Consolidation',
 'POL': 'Tax policy Adjustment',
 'PRT': 'Fiscal Consolidation',
 'ROM': 'Fiscal Consolidation',
 'SGP': 'Medium Term Fiscal Adjustment',
 'SMR': 'Fiscal Consolidation',
 'SVK': 'Fiscal Consolidation',
 'SWE': 'Fiscal Consolidation',
 'TGO': 'Fiscal Risk',
 'THA': 'Expansionary Fiscal Pilocy',
 'TON': 'Expansionary Fiscal Pilocy',
 'UGA': 'Fiscal Consolidation'}
     
     Expansionary Fiscal Pilocy         #7E57C2
     Fiscal Consolidation               #F39C12
     Fiscal Risk  :                     #E74C3C
     Medium Term Fiscal Adjustment      #2980B9
     Tax policy Adjustment  :           #45B39D
    */
    map.updateChoropleth({FJI: '#7E57C2',
GNQ: '#7E57C2',
BGD: '#7E57C2',
BEL: '#F39C12',
DOM: '#45B39D',
LUX: '#F39C12',
ISR: '#F39C12',
SWE: '#F39C12',
DEU: '#7E57C2',
BGR: '#F39C12',
EST: '#2980B9',
BOL: '#F39C12',
GBR: '#45B39D',
COL: '#45B39D',
PAN: '#F39C12',
CHE: '#2980B9',
TGO: '#E74C3C',
ROM: '#F39C12',
BIH: '#45B39D',
BWA: '#7E57C2',
SGP: '#2980B9',
HUN: '#F39C12',
CMR: '#7E57C2',
PRT: '#F39C12',
POL: '#45B39D',
NLD: '#F39C12',
MNE: '#F39C12',
KWT: '#F39C12',
TON: '#7E57C2',
FRA: '#45B39D',
AFG: '#F39C12',
SVK: '#F39C12',
UGA: '#F39C12',
HRV: '#F39C12',
IRL: '#F39C12',
SMR: '#F39C12',
LVA: '#45B39D',
DJI: '#45B39D',
MUS: '#F39C12',
FIN: '#45B39D',
THA: '#7E57C2',
NPL: '#7E57C2',
JPN: '#45B39D',
NIC: '#F39C12',
PHL: '#F39C12',
ITA: '#E74C3C',
KSV: '#2980B9',
IND: '#45B39D',
KAZ: '#F39C12',
MEX: '#F39C12',
NOR: '#2980B9',
CZE: '#2980B9'}, {reset: true});   
}

          
