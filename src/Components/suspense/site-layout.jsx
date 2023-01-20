import "./suspense.css"

export default function SiteLayout({
   children,
   nav = c => null
}) {
   return (
      <div className="site-container">
         <header className = "header" > 
            Callout  
         </header>  
         {nav}
         <main className="main"> Contents <br /> 
         <h6>this is    the   main part of the example layout</h6>  
         </main>
      </div>
   ); 
}