
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, Shield, HeadphonesIcon, Globe, CheckCircle } from "lucide-react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FleetTypes from "@/components/FleetTypes";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <FleetTypes />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
