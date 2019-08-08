const workshops = {
  render: async () => {
    return `
    <section id="workshops">
      <h3>Talleres</h3>
      <div class="divider"></div>
      <div class="section">
        <h5>Zona sur</h5>
        <h6>Enbiciados Bike</h6>
        <p><i class="material-icons tiny">location_on</i> Av. Coyoacán 745 A, Col del Valle Centro, 03100 Ciudad de
          México, CDMX</p>
        <p><i class="material-icons tiny">local_phone</i> 01 55 5335 1127</p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h5>Zona norte</h5>
        <h6>Taller Comunitario Enchulame La Bici</h6>
        <p><i class="material-icons tiny">location_on</i> Calle Eligio Ancona 79, Sta María la Ribera, 06400 Ciudad de
          México, CDMX</p>
        <p><i class="material-icons tiny">local_phone</i> 01 55 7038 9057</p>
      </div>
      <div class="divider"></div>
      <div class="section">
        <h5>Zona centro</h5>
        <h6>La Bici Urbana</h6>
        <p><i class="material-icons tiny">location_on</i> Av. Morelos 70, Juárez, 06600 Ciudad de México, CDMX</p>
        <p><i class="material-icons tiny">local_phone</i> 01 55 5578 0547</p>
      </div>
    </section>
        `;
  },
  after_render: () => {}
};
export default workshops;
