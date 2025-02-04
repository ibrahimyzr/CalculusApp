import lo from "../assets/google-logo.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <div
        className="card mt-1 "
        style={{
          backgroundColor: "honeydew",
          paddingLeft: 30,
          /*  backgroundImage: `url(${lo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 1200, */
        }}
      >
        <h4 style={{ textAlign: "center" }}>Merhaba:</h4>
        <p>
          ODTÜ Makina muh mezunuyum. Üniversite yıllarından bu yana özel dersler
          veriyorum.Herhangi bir dersane vb kurumla çalışmıyorum.
        </p>
        <p>
          Az öğrenciyle çalışmayı tercih ediyorum. Bu yüzden kontenjan
          sınırlaması vardır.
        </p>

        <p>
          <h6>Dersler :</h6>
          Calculus, Differential Equations, Linear Algebra,Numerical Methods for
          Engineers
        </p>

        <p>
          <h6>Bilgisayar :</h6>Matlab, MathCad, Maple
        </p>

        <p>
          <h6>Bilgisayar :</h6>AutoCAD, Revit, Solidworks
        </p>

        <p>
          <h6>Ders Verdiği il :</h6>
          <span>Ankara</span>
        </p>
        <p>
          {" "}
          <h6>Ders Verme Yeri :</h6>Öğrenci evinde yada ortak kararlaştırılan
          uygun bir yerde
        </p>
        <p>
          {" "}
          <h6>Ders Verme şekli :</h6>Yüz yüze bire bir, En fazla 2 kişilik grup
        </p>
        {/* <p>
          {" "}
          <h6>Ders Saat Ücret :</h6>WhatsApp üzerinden sorabilirsiniz.
          <i
            className="bi bi-whatsapp h5"
            style={{ backgroundColor: "green" }}
          ></i>
          {""} {""} {""} {""} {""}
          <span>0544 223 6441</span>
        </p>
        <p>
          {" "}
          <h6>Ders Saati :</h6> WhatsApp üzerinden sorabilirsiniz.
          <i
            className="bi bi-whatsapp h5"
            style={{ backgroundColor: "green" }}
          ></i>
          {""} {""} {""} {""} {""}
          <span>0544 223 6441</span>
        </p> */}
      </div>
    </div>
  );
};

export default About;
