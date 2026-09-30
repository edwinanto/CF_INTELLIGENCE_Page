import { Brand, Icon } from "./ui";
export function IntelligenceDiagram() {
  return (
    <div
      className="intelligence-visual"
      role="img"
      aria-label="Ecosistema conectado: los datos del negocio se integran con software, inteligencia artificial y automatización para mejorar la operación."
    >
      <div className="diagram-top">
        <span>
          <i /> ECOSISTEMA CONECTADO
        </span>
        <span>CF / 01</span>
      </div>
      <div className="diagram-orbit orbit-one" />
      <div className="diagram-orbit orbit-two" />
      <svg
        className="diagram-lines"
        viewBox="0 0 600 470"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M90 110H185Q220 110 220 145V195H300M500 105H425Q385 105 385 150V210H300M90 350H185Q220 350 220 320V260H300M490 355H425Q385 355 385 315V250H300"
          stroke="currentColor"
          strokeDasharray="4 5"
        />
        <path
          className="signal-line"
          d="M300 55V410M90 230H515"
          stroke="currentColor"
        />
        <circle cx="300" cy="55" r="3" fill="currentColor" />
        <circle cx="300" cy="410" r="3" fill="currentColor" />
      </svg>
      <div className="diagram-core">
        <Brand compact />
        <strong>CF Intelligence</strong>
        <span>CONNECTED BUSINESS</span>
      </div>
      <div className="diagram-node node-data">
        <Icon name="database" />
        <div>
          <span>01 / CONECTAR</span>
          <strong>Datos de tu negocio</strong>
        </div>
        <i />
      </div>
      <div className="diagram-node node-ai">
        <Icon name="spark" />
        <div>
          <span>02 / ENTENDER</span>
          <strong>Inteligencia artificial</strong>
        </div>
        <i />
      </div>
      <div className="diagram-node node-software">
        <Icon name="code" />
        <div>
          <span>03 / CONSTRUIR</span>
          <strong>Software a medida</strong>
        </div>
        <i />
      </div>
      <div className="diagram-node node-auto">
        <Icon name="workflow" />
        <div>
          <span>04 / ACTUAR</span>
          <strong>Automatización</strong>
        </div>
        <i />
      </div>
      <div className="diagram-bottom">
        <span>DATOS → DECISIONES → ACCIONES</span>
        <span className="diagram-result">
          Más control. Más posibilidades. <Icon name="northeast" size={13} />
        </span>
      </div>
    </div>
  );
}
