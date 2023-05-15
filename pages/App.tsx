import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine, IOptions } from "tsparticles-engine";
import particleConfig from "./Config/particleConfig.json";

export default function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  const options = particleConfig as unknown as Partial<IOptions>;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
}
