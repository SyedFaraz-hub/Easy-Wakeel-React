import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import CasesPortfolio from "./Components/CasesPortfolio";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import LegalServices from "./Components/LegalServices";
import {   BrowserRouter,
  Routes,  Route } from "react-router-dom";
import HireALawyer from "./Components/HireALawyer";

//Images
import cardImage1 from "./Assects/Cards/rent.png"
import cardImage2 from "./Assects/Cards/child-custody.png"
import cardImage3 from "./Assects/Cards/divorce.png"
import cardImage4 from "./Assects/Cards/inheritance.png"
import cardImage5 from "./Assects/Cards/labour.png"
import cardImage8 from "./Assects/Cards/property.png"
import cardImage11 from "./Assects/Cards/women.png"


function App() {

  let Divorce = {'Q1': 'What is Khula ?', 
                        'A1': 'Khula is a right given to the wife in Islam to get separation from her husband in case she is not willing to live happily with her husband. To get Khula the lady needs to go to the court where she is required to file a petition for judicial separation.',
                        'Q2': 'Is there any conditions for seeking separation through Khula ?', 
                        'A2': 'Yes. As per law a woman seeking separation from husband through Khula need to return a portion of dower received from the husband.',
                        'Q3': 'How much time is required for getting a decree of Khula ?', 
                        'A3': 'If husband appears before the court and contest the matter , then approximately 2 months and if do not contest, in 1 month.',
                        'Q4': 'What are the documents required for obtaining decree of Khula or for filing a case ?', 
                        'A4': 'Copy of CNIC, Copy of Nikah Nama (Marriage Certificate) and current address of the husband.',
                      }

  let RentCases = {'Q1': 'Is there any law related to rented properties in Pakistan?', 
                        'A1': 'Yes of course. There are various laws related to management rented properties. These Laws provide a proper system for a landlord and a tenant which must be adopted to avoid any complications.',
                        'Q2': 'Is it necessary to reduce a rent deed in writing ?', 
                        'A2': 'Yes it is necessary to reduce a rent agreement in writing as per law.',
                        'Q3': 'Which stamp paper is required for rent agreement in Pakistan?  ', 
                        'A3': 'The renting should be for either residential or commercial purposes. There should be a written agreement between the owner and the tenant. The agreement should be printed on a Stamp paper of a minimum value of Rs. 100 or 200/-.',
                        'Q4': 'What is rental agreement in Pakistan?  ', 
                        'A4': 'A tenancy agreement in Pakistan is also known as a rent agreement, and it has no prescribed format. The contents, terms and conditions, and other policies of the contract are entirely in the hands of the landlord and tenant'
                      }

  let PropertyCases = {'Q1': 'Can I get possession of my property?', 
                        'A1': 'Yes, you can get possession of your property through court by filing a suit for possession.',
                        'Q2': 'How can I register my property in Pakistan?', 
                        'A2': 'Prepare a deed by a Deed Writer on stamp paper then Submit your dues in the National Bank of Pakistan Visit Office of Sub-Registrar located at F-8 Markaz, Islamabad and then Submit all the documents to Sub-Registrar and receive the receipt.',
                        'Q3': 'How do you verify property documents?', 
                        'A3': 'You can use the official pages by the government of Punjab and Sindh for this purpose. You can also use the land records management information system (LRMIS) online for Punjab to verify the property rights.',
                        'Q4': 'How do I transfer ownership of land in Pakistan?  ', 
                        'A4': 'Original Allotment Letter , Property Tax Clearance Certificate ,  Photocopies of CNIC (attested onesStatement recorded before the concerned Deputy Director along with his official seal.'
                      }

  let ChildCustody = {'Q1': 'Can I get custody of my children through court ?', 
                        'A1': 'Yes , as per law you can get custody of your children through court.',
                        'Q2': 'What is the procedure for getting custody of minors ?', 
                        'A2': 'One has to file a petition in the Guardian Court with contentions that why he or she is entitled and other spouse is not entitled to take the custody of the child.',
                        'Q3': 'What is the prime consideration or condition which guardian court considers while deciding the petition for child custody ?', 
                        'A3': 'The prime consideration is welfare of the child.',
                        'Q4': 'Normally in what age minors are being given to the father ?', 
                        'A4': 'According to law, but again the welfare of the minor is given priority while deciding such matters.'
                      }

  let inheritance = {'Q1': 'Is there any law in Pakistan relating to Inheritance ?', 
                        'A1': 'Yes, There is a law available.',
                        'Q2': 'Whether the children can get share in the property of their grandfather after the death of their father?', 
                        'A2': 'Yes. As per law they can get their shares.',
                        'Q3': 'How does inheritance work in Pakistan?', 
                        'A3': 'A husband is entitled to half his deceased wife estate if she has no children. If she has children, he is entitled to a quarter share. A wife is entitled to a quarter share of her deceased husbands estate if she has no children. If she has children, she is entitled to one eighth.',
                        'Q4': 'Who is the owner of property after father death?', 
                        'A4': 'Since your father died intestate, that is, without making a will, all the legal heirs, including you, your brother and your mother, will have equal rights over the property. If he had made a will making your brother the beneficiary of the property, you would have had no legal right over the said property.'
                      }

  let OverseasServices = {'Q1': 'What is international law in Pakistan ?', 
                        'A1': 'Public international law is the set of legal rules that govern international relations between public bodies that include states (i.e. Pakistan) and international organizations (i.e. the United Nations).',
                        'Q2': 'Does UK law apply in Pakistan ?', 
                        'A2': 'Pakistani law is based upon the legal system of British India; thus ultimately on the common law of England and Wales.',
                        'Q3': 'What is the scope of international law in Pakistan?', 
                        'A3': 'However, the scope of International Law covers the legal disciplines of public international law, private international law and supranational law. - Public international law, which involves for instance the United Nations, maritime law, international criminal law and the Geneva conventions.',
                        'Q4': 'What is the difference between international law and domestic law    ?', 
                        'A4': 'International law is all about behaviors and actions of persons, companies or states and countries in cross border situations. Domestic law arises from legislature that is created by a group of people within one country.'
                      }
  let LabourCases = {'Q1': 'What are the basic labour laws?   ', 
                        'A1': 'The basic subject matter of labour law can be considered under nine broad heads: employment; individual employment relationships; wages and remuneration; conditions of work; health, safety, and welfare; social security; trade unions and industrial relations',
                        'Q2': 'What is the minimum wage in Pakistan 2022 ?', 
                        'A2': 'Pakistans Minimum Wage is the lowest amount a worker can be legally paid for his work. Most countries have a nation-wide minimum wage that all workers must be paid. Pakistans minimum wage is 25,000 Pakistani rupees per month.',
                        'Q3': 'How is salary calculated in labour law?', 
                        'A3': 'This is the most common method for daily wage workers. There are two methods here to calculate this: Method A: Monthly Gross Salary = (Net Daily Wage) * (Present Days) Method B: Monthly Gross Salary = (Net Daily Wage) * (Present Days + Weekly Holidays)',
                        'Q4': 'What is the minimum wage act?', 
                        'A4': 'The Minimum Wages Act 1948 generally specifies minimum wage rates on a per day basis, and extends to the entire country and is revised within a period of not less than five years, however there is a provision to increase dearness allowance every two years.'
                      }
  let WomenRights = {'Q1': 'What are the womens rights in Pakistan?', 
                        'A1': 'The constitution stipulated that "there shall be no discrimination on the basis of sex alone." The Constitution additionally affords the protection of marriage, family, the mother and the child as well as ensuring "full participation of women in all spheres of national life."',
                        'Q2': 'What is Article 24 in Pakistan ?', 
                        'A2': '24. Protection of property rights. (1) No person shall be compulsorily deprived of his property save in accordance with law.',
                        'Q3': 'What is the issue of womens rights?', 
                        'A3': 'The main issues that third wave feminists are concerned about include: sexual harassment, domestic violence, the pay gap between men and women, eating disorders and body image, sexual and reproductive rights, honour crimes and female genital mutilation.',
                        'Q4': 'How can we protect womens rights?', 
                        'A4': 'Raise your voice , Support one anotherGet involved, Educate the next generation Know your rights. Join the conversation.'
                      }


  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/about" element={<About />}/>
      <Route path="/HireALawyer" element={<HireALawyer/>}/>
      <Route path="/legalServices1" element={  <LegalServices image={cardImage3} title="Divorce Cases" details={Divorce} />}/>
      <Route path="/legalServices2" element={  <LegalServices image={cardImage1} title="Rent Cases" details={RentCases} />}/>
      <Route path="/legalServices3" element={  <LegalServices image={cardImage8} title="Property Cases" details={PropertyCases}/>}/>
      <Route path="/legalServices4" element={  <LegalServices image={cardImage2} title="Child Custody" details={ChildCustody}/>}/>
      <Route path="/legalServices5" element={  <LegalServices image={cardImage4} title="inheritance" details={inheritance}/>}/>
      <Route path="/legalServices6" element={  <LegalServices image={cardImage1} title="Overseas Services" details={OverseasServices}/>}/>
      <Route path="/legalServices7" element={  <LegalServices image={cardImage5} title="Labour Cases" details={LabourCases}/>}/>
      <Route path="/legalServices8" element={  <LegalServices image={cardImage11} title="Women Rights" details={WomenRights}/>}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={ <Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/" element={<><Slider /> <CasesPortfolio /> </> }/>
    </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
